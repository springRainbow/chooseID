<template>
	<div class='wrap' v-cloak>
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>消息</font>
			</div>
		</div>-->
		<div class="main">
			<div>
				<div class="banner_img">
					<img src="../../static/img/symbols-banner.png" alt="">
				</div>
				<div class="title">
					<h1>单身贵族线下活动</h1>
				</div>
				<div class="detail_info">
					<p>
						凭双方的入场门票，在会场内找到N个（视赞助商定）“桃花使者”， 每取得一个“桃花使者”的祝福， 你们就可以得到价值不菲的优惠礼券哦！集齐所有桃花使者的祝福，你们局可以在“天下无双”的桃树旁边...
					</p>
				</div>
			</div>

			<div class="actives" v-for="item in listData" :key="item.id">
				<div class='content'>
					<div class="title">
						<h1>活动详情</h1>
					</div>
					<ul>
						<li>
							<span style="width: 6rem;">活动地区：</span>
							<span style="width: 100%;">{{item.place}}</span>
						</li>
						<li>
							<span style="width: 6.7rem;">活动时间：</span>
							<span style="width: 100%;">{{item.start}}-{{item.end}}</span>
						</li>
						<li>
							<span style="width: 6rem;">报名费用：</span>
							<span style="width: 100%;">{{item.price}}元</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="btn" style="margin-bottom: 5rem;" @click='isCheck =!isCheck'>
			<span>我要报名</span>
		</div>
		<div class="mark" v-show='isCheck'>
			<div class="mark_content">
				<h2>报名</h2>
				<ul>
					<li>
						<span>在这里，你会更快遇见有缘分的他/她！</span>

					</li>
					<li>
						<span>报名人数：</span>
						<span>- 1 +</span>
					</li>
					<li>
						<span>报名费用：</span>
						<span style='color:#F40166;'>￥99.00</span>
					</li>
				</ul>
				<div class="dele" @click='isCheck =!isCheck'>
					<button>支付</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'DetailPage',
		data() {
			return {
				isCheck: false,
				listData: [],
				applyId: "",
				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			console.log(this.tokenNew)
			this.activity()
		},
		methods: {
			// alertClick: () => {
			//     console.log(1111);
			//     console.log(this.isCheck)
			//     this.isCheck = true;
			// },
			// closeMark: () => {
			//     console.log(111);
			//     this.isCheck = false;
			// }
			getOn() {
				this.$router.go("-1")
			},
			activity() {
				var _this = this;
				this.$http({
						method: "get",
						url: "http://yinhan-media.weiyingjia.org/api/yinhan/actives",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + this.tokenNew
						}
					}).then(res => {
						_this.listData = res.data.data
						console.log(_this.listData)
					})
					.catch(error => {
						throw error
					})
			}
			//			apply() {
			//				var _this = this;
			//				this.$http({
			//					method: "post",
			//					url: "http://yinhan-media.weiyingjia.org/api/yinhan/active/" + _this.$router.params.id
			//				}).then(res => {
			//					console.log(res)
			//				})
			//
			//			},

		},
		created() {
			
		}
	}
</script>

<style scoped>
	.head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	.bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	.bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	.bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	.wrap {
		width: 100%;
	}
	
	.main {
		display: block;
		margin: 0 auto;
		padding: 0 1rem;
		margin-top: 0.8rem;
	}
	
	.main>div {
		/*padding-bottom: 1rem;*/
		box-shadow: 0 2px 10px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	.banner_img {
		width: 100%;
		margin-bottom: .8rem;
		background: #FFFFFF;
		box-shadow: 0 2px 10px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	.banner_img img {
		width: 100%;
		height: auto;
	}
	
	.title {
		padding-left: .8rem;
		padding-right: 1rem;
		font-size: 1.7rem;
		padding-bottom: .5rem;
	}
	
	.title>h1 {
		font-size: 1.21rem;
		border-bottom: 1px solid #eeeeee;
		line-height: 3rem;
	}
	
	.detail_info {
		padding-left: .8rem;
		color: #666666;
		line-height: 1.8rem;
	}
	
	.actives {
		margin-top: 1rem;
	}
	
	.actives>.content {
		padding-bottom: 1rem;
		border: 1px solid #EEEEEE;
		box-shadow: 0 2px 10px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	.actives>div>ul>li {
		padding-left: .8rem;
		display: flex;
		line-height: 2.5rem;
		color: #666666;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.btn>span {
		text-align: center;
		color: #fff;
		display: block;
		margin: 2rem auto;
		width: 11rem;
		height: 3rem;
		line-height: 3rem;
		background: #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.39);
		border-radius: 3px;
	}
	/* 弹出层 */
	
	.mark {
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	.mark_content {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 85%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding-bottom: 2rem;
	}
	
	.mark_content>h2 {
		position: relative;
		text-align: center;
		line-height: 4rem;
		font-size: 1.6rem;
		border-bottom: 1px solid #EEEEEE;
	}
	
	.mark_content>ul {
		padding: 1rem;
	}
	
	.mark_content>ul>li {
		display: flex;
		line-height: 2.5rem;
	}
	/*.dele {
		position: absolute;
		top: 120%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 2rem;
		height: 2rem;
		line-height: 2.8rem;
		border-radius: 50%;
		background: #EEEEEE;
		font-size: 1rem;
		color: #A7A7A7;
	}*/
	
	.dele {
		width: 100%;
	}
	
	.dele button {
		padding: 0.6rem 1.6rem;
		margin: 0 auto;
		display: block;
		background: #FFFFFF;
		border: 1px solid #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.30);
		border-radius: 3px;
		font-size: 1.07rem;
		color: #B674FD;
	}
</style>