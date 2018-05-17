<template>
	<div class="main">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>消息</font>
			</div>
		</div>-->
		<div class="bannerImg" v-cloak>
			<el-carousel :interval="4000" arrow="never">
				<el-carousel-item>
					<img src="../../static/img/symbols-banner.png" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../../static/img/symbols-banner.png" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../../static/img/symbols-banner.png" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<div v-for="item in listData" :key="item.id">
			<router-link class="activeContainer" :to="'/DetailPage/'+item.id">
				<div class="photo">
					<img :src="item.img" />
				</div>
				<div class="activemain" style="margin-left: -1rem;width: 58%;">
					<h3>{{item.title}}</h3>
					<p>活动时间：{{item.start}} - {{item.end}}</p>
					<div class="areaMain">
						<p style="color: #666666;font-size: 1.07rem;width: 6rem;">地区：{{item.place}}</p><span>报名中</span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Encounter',
		data() {
			return {
				listData: [],
				//				listImg: [{
				//					img: "../../static/img/symbols-banner.png"
				//				}, {
				//					img: "../../static/img/symbols-banner.png"
				//				}, {
				//					img: "../../static/img/symbols-banner.png"
				//				}, {
				//					img: "../../static/img/symbols-banner.png"
				//				}],
				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			console.log(this.tokenNew)
		},
		methods: {
			// click(id) {
			//     this.$router.push({
			//         name: "DetailPage",
			//         query: {
			//             id: id
			//         }
			//     })
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
					})
					.then(res => {
						_this.listData = res.data.data
					})
					.catch(error => {
						throw error
					})
			},
			banner() {
				var _this = this;
				this.$http({
						method: "get",
						url: "http://yinhan-media.weiyingjia.org/api/yinhan/banners",
						params: {
							type: 1
						},
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer" + this.tokenNew
						}
					}).then(res => {
						//						console.log(res)
					})
					.catch(error => {
						throw error
					})
			}
		},
		component: {

		},
		created() {
			this.activity()
			this.banner()
		}
	}
</script>
<style lang="scss" scoped>
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
	
	.main {
		margin-bottom: 3rem;
	}
	
	.bannerImg {
		width: 100%;
		height: 10.7rem;
	}
	
	.bannerImg img {
		width: 100%;
		overflow: hidden;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	
	.el-carousel {
		z-index: 0;
		height: 100%;
	}
	
	.activeContainer {
		width: 94.7%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	.photo {
		width: 8.07rem;
		height: 6.71rem;
	}
	
	.photo>img {
		width: 100%;
		height: 100%;
		max-width: 100%;
	}
	
	.activemain>h3 {
		font-size: 1.21rem;
		color: #000000;
		font-weight: bold;
		letter-spacing: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.activemain>p {
		margin-top: 0.8rem;
		font-size: 1;
		color: #000000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.areaMain {
		display: flex;
		justify-content: space-between;
		margin-top: 1.6rem;
	}
	
	.areaMain span {
		margin-top: -1.2rem;
		color: #FFFFFF;
		padding: 0.7rem 1.5rem;
		background: #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.39);
		border-radius: 3px;
	}
	
	.areaMain p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>