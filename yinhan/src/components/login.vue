<template>
	<div id="login">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>登录注册</font>
			</div>
		</div>-->
		<div class="banner">
			<img src="../../static/img/symbols-banner.png" />
		</div>
		<div class="main">
			<ul>
				<li class="top">
					<!--<div class="member" @click="index=0,bol=true" :class="index==0?'active':''">
						登录
					</div>-->
					<div class="member" @click="index=1,bol=false" :class="index==1?'active':''">
						绑定手机号
					</div>
				</li>
				<li class="center" v-show="!bol">
					<div class="signtop">
						<label for="">手机号</label>
						<input type="tel" placeholder="请输入手机号码" v-model="signnum" />
					</div>
					<div class="signbottom">
						<label for="">验证码</label>
						<input type="tel" placeholder="请输入验证码" v-model="signpass" />
						<button @click='signIn()'>发送</button>
					</div>
				</li>
				<li class="bottomtwo" v-show="!bol">
					<a href="javascript:">注册遇到问题？</a>
					<div>
						<button @click="btnOpera()">绑定手机号</button>
					</div>
				</li>
				<!--<li v-show="bol">
					<ul>
						<li class="center" v-show="bol">
							<div class="signtop">
								<label for="">手机号</label>
								<input type="tel" placeholder="请输入手机号码" />
							</div>
							<div class="signbottom">
								<label for="">验证码</label>
								<input type="tel" placeholder="请输入验证码" />
								<button>发送</button>
							</div>
						</li>
						<li class="bottomtwo" v-show="bol">
							<a href="javascript:">登录遇到问题？</a>
							<div>
								<button>登录</button>
							</div>
						</li>
					</ul>
				</li>-->
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				bol: false,
				index: 1,
				signnum: '',
				signpass: '',
				signpass1: '',

				pattern: /^[1][3,4,5,7,8,6][0-9]{9}$/,
				cmdpwd: null, //获取从后台得到的短信验证码
				phone: null, //输入的手机号
				issuccess: null, //判断是否有误
				inputMsg: "", //手机号
				number: true,
				inputPwd: null, //验证码
				pwdCheck: true, //验证码

				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			console.log(this.tokenNew)
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			},
			signIn() {
				this.$http({
					method: "post",
					url: 'http://yinhan-media.weiyingjia.org/api/yinhan/code',
					params: {
						phone: this.signnum
					},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					console.log(res)
					//					this.btnOpera()
				}).catch(res => {
					console.log(res)
				})
			},
			btnOpera() {
				let _this = this
				if(!this.signpass) {
					alert("请勿重复操作")
				} else {
					//业务逻辑
					// if (this.signpass === this.cmdpwd) {
					// 第二次 ---- 验证码校验成功之后---开始在次验证接口
					this.$http({
						method: "post",
						url: 'http://yinhan-media.weiyingjia.org/api/yinhan/phone',
						data: {
							phone: this.signnum,
							code: this.signpass
						},
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + this.tokenNew
						}
					}).then(res => {
						console.log(res)
						sessionStorage.phone = res.data.data.phone
						this.$router.push({
							path: "/Info"
						})

						// this.issuccess = response.data.code;
						// if (this.issuccess == 1000) {
						// 	layer.load(1);
						// 	setTimeout(function () {
						// 		location.href = './cardEx.html'
						// 	}, 1000)
						// } else {
						// 	$('.errinfo').text('请求出现错误！');
						// 	layui.use('layer', function () {
						// 		var layer = layui.layer;
						// 		layer.msg('请求出现错误，请稍后！');
						// 	});
						// }
					}).catch(res => {
						console.log(res)
					})
					// }
					setTimeout(function() {
						this.number == true
					}, 3000)
				}
			}
		}
	}
</script>

<style>
	#login .head {
		width: 100%;
	}
	
	#login .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#login .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#login .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#login .banner img {
		width: 100%;
		max-width: 100%;
	}
	
	#login .main {
		width: 94.7%;
		margin: 0 auto;
	}
	
	#login .top {
		margin-top: 1.8%;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
		display: flex;
		justify-content: space-around;
	}
	
	#login .top .member {
		padding: 1rem 1rem;
		font-size: 1.11rem;
		color: #333333;
		letter-spacing: 0;
	}
	
	#login .center {
		width: 95%;
		margin: 1.5rem auto;
	}
	
	#login .center input {
		font-size: 1.1rem;
		color: #CCCCCC;
		letter-spacing: 0;
	}
	
	#login .center label {
		display: inline-block;
		width: 5rem;
	}
	
	#login .center .signtop,
	#login .center .signbottom {
		padding: 1.5rem 0;
		font-size: 1.1rem;
		color: #333333;
		letter-spacing: 0;
	}
	
	#login .center .signtop {
		border-bottom: 1px solid #F5F5F5;
	}
	
	#login .center .signbottom button {
		padding: 0.5rem 1rem;
		background: #FFFFFF;
		border: 1px solid #B674FD;
		border-radius: 3px;
		color: #B674FD;
	}
	
	#login .bottomtwo a {
		display: inline-block;
		width: 100%;
		text-align: right;
		margin-top: 1rem;
		font-size: 0.8rem;
		color: #2F7DFF;
		letter-spacing: 0;
		line-height: 16px;
	}
	
	#login .bottomtwo div {
		width: 100%;
		padding-top: 4rem;
	}
	
	#login .bottomtwo div button {
		display: block;
		background: #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.39);
		border-radius: 3px;
		padding: 0.8rem 10rem;
		color: white;
		font-size: 1.1rem;
		margin: 0 auto;
	}
	
	#login .active {
		border-bottom: 2px solid #B674FD;
	}
</style>