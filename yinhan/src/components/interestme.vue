<template>
	<div id="interestme">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>关注我的</font>
			</div>
		</div>-->
		<div class="maintop">
			<div class="time">
				今天
			</div>
			<div class="person">
				<div class="personitem" v-for="(items,index) in getData">
					<div class="photo">
						<img src="../../static/img/15.png" />
					</div>
					<p><span>{{items.name}}</span><span>{{items.age}}岁</span></p>
					<button @click="take(index)">牵手</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "interestme",
		data() {
			return {
				getData: '',
				getId: [],
				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			this.getMine()
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			},

			getMine() {
				var _this = this
				this.$http({
					method: "get",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/follows",
					params: {
						type: "2"
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
			},
			
		}
	}
</script>

<style>
	#interestme .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#interestme .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#interestme .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#interestme .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#interestme .maintop {
		width: 94.7%;
		margin: 0 auto;
		margin-top: 1rem;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
		margin-bottom: 5rem;
	}
	
	#interestme .time {
		padding: 1rem;
		font-size: 1.07rem;
		font-weight: 900!important;
	}
	
	#interestme .person {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	#interestme .personitem {
		display: flex;
		flex-direction: column;
		width: 28%;
	}
	
	#interestme .personitem .photo {
		margin: 0 auto;
	}
	
	#interestme .personitem>p {
		display: flex;
		justify-content: space-around;
		font-size: 1.07rem;
	}
	
	#interestme .personitem>button {
		width: 5rem;
		margin: 1rem auto;
		padding: 0.6rem 0.8rem;
		background: #FFFFFF;
		border: 1px solid #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.30);
		border-radius: 3px;
		color: #B674FD;
	}
	
	#interestme .personitem>p>span:nth-of-type(2) {
		color: #B674FD;
	}
</style>