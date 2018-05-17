<template>
	<div id="msg">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>消息</font>
			</div>
		</div>-->
		<ul class="list">
			<li v-for='(item,index) in listData' :key='item.id' @click='detailPage(item.id)'>
				<img :src="item.sender_img" />
				<div>
					<p>
						<span>{{item.sender_name}}</span>
						<span>{{item.createtime}}</span>
					</p>
					<p>
						<span>{{item.sender_age}}</span>
						<span>{{item.sender_address}}</span>
						<span>{{item.content}}</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "me",
		data() {
			return {
				listData: null, //数据
				detailId: null, // 详情页id
				toenNew: ""
			}
		},
		created() {
			this.tokenNew = sessionStorage.getItem("Token")
			this.$http({
			
					method: "get",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/messages",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(response => {
					this.listData = response.data.data;
					console.log(this.listData)
				})
				.catch(error => {
					throw error;
				})
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			},
			detailPage(id) {
				console.log(id);
				this.detailId = id;
				console.log(this.detailId);
				this.$router.push({
					path: '/advices?url=' + this.detailId
				});
			}
		},
		mounted() {
			
		}
	}
</script>
<style type="text/css">
	#msg .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#msg .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#msg .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#msg .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#msg .list {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	
	#msg .list li {
		display: flex;
		width: 95%;
		margin: 0rem auto;
		margin-top: 0.9rem;
		height: 5.57rem;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#msg .list li:nth-of-type(1) {
		margin-top: 1rem;
	}
	
	#msg .list li img {
		display: flex;
		margin: auto 0.8rem;
		width: 4.71rem;
		height: 4.71rem;
		max-width: 100%;
		border-radius: 50%;
	}
	
	#msg .list li div {
		width: 100%;
		padding-right: 1rem;
		justify-content: space-around;
		display: flex;
		flex-direction: column;
	}
	
	#msg .list li div p {
		display: flex;
		justify-content: space-between;
	}
	
	#msg .list li div p:nth-of-type(1) span:nth-of-type(1) {
		color: #000000;
		font-size: 1.1rem;
	}
	
	#msg .list li div p:nth-of-type(1) {
		margin-top: 0.5rem;
	}
	
	#msg .list li div p:nth-of-type(2) {
		margin-bottom: 0.5rem;
	}
	
	#msg .list li div p:nth-of-type(1) span:nth-of-type(2),
	#msg .list li div p:nth-of-type(2) span:nth-of-type(2) {
		color: #666;
		font-size: 0.8rem;
	}
	
	#msg .list li div p:nth-of-type(2) span:nth-of-type(1),
	#msg .list li div p:nth-of-type(2) span:nth-of-type(3) {
		color: #E6C2FC;
	}
</style>