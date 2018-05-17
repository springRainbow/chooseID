<template>
	<div id="meinterest">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>我关注的</font>
			</div>
		</div>-->
		<div class="maintop">
			<div class="time">
				今天
			</div>
			<div class="person">
				<div class="personitem" v-for="(items,index) in getData">
					<div class="photo">
						<img src="../../static/img/10.png" />
					</div>
					<p><span>{{items.name}}</span><span>{{items.age}}岁</span></p>
					<button @click="take(index)">求牵</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "meinterest",
		data() {
			return {
				getData: '', //关注列表接口数据存储,
				getId: [],
				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			console.log(this.tokenNew)
			this.getMine()
			
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			},
			//获取我关注的接口数据
			getMine() {
				var _this = this
				this.$http({
					method: "get",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/follows",
					params: {
						type: "1"
					},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					_this.getData = res.data.data
					_this.getData.map(function(value, index) {
						_this.getId.push(value.id)
					})
				}).catch(res => {
					console.log(res)
				})
			},
			//求牵
			take(index) {
				var _this = this
				this.$http({
					method: "post",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/message",
					params: {
						member_id: _this.getId[index]
					},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					// _this.getData = res.data.data
					console.log(res)
				}).catch(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	#meinterest .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#meinterest .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#meinterest .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#meinterest .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#meinterest .maintop {
		width: 94.7%;
		margin: 0 auto;
		margin-top: 1rem;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
		margin-bottom: 5rem;
	}
	
	#meinterest .time {
		padding: 1rem;
		font-size: 1.07rem;
		font-weight: 900!important;
	}
	
	#meinterest .person {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	#meinterest .personitem {
		display: flex;
		flex-direction: column;
		width: 28%;
	}
	
	#meinterest .personitem .photo {
		margin: 0 auto;
	}
	
	#meinterest .personitem>p {
		display: flex;
		justify-content: space-around;
		font-size: 1.07rem;
	}
	
	#meinterest .personitem>button {
		width: 5rem;
		margin: 1rem auto;
		padding: 0.6rem 0.8rem;
		background: #FFFFFF;
		border: 1px solid #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.30);
		border-radius: 3px;
		color: #B674FD;
	}
	
	#meinterest .personitem>p>span:nth-of-type(2) {
		color: #B674FD;
	}
</style>