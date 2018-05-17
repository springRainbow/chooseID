<template>
	<div id="account">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>账号管理</font>
			</div>
		</div>-->
		<div class="hint">
			<span>温馨提示：</span>
			<span>如果您更改了手机号码，请输入新的手机号</span>
		</div>
		<div class="main">
			<div class="container">
				<li class="center">
					<div class="signtop">
						<label for="">原账号</label>
						<input type="tel" placeholder="请输入原手机号码" v-model="oldtel" />
					</div>
					<div class="signbottom">
						<label for="">新账号</label>
						<input type="tel" placeholder="请输入新手机号码" v-model="newtel" />
						<button>发送</button>
					</div>
					<div class="signcenter">
						<label for="">验证码</label>
						<input type="tel" placeholder="请输入验证码" v-model="securityCode" />
					</div>
				</li>
			</div>
		</div>
		<div class="btn">
			<button>确认</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "account",
		data() {
			return {
				oldtel: "",
				newtel: "",
				securityCode: "",
				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			}
		}
	}
</script>

<style>
	#account .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#account .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#account .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#account .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#account .hint {
		padding: 2rem 3.8rem 2.3rem 3.8rem;
		display: flex;
		justify-content: space-around;
	}
	
	#account .hint span:nth-of-type(1) {
		width: 7rem;
		font-size: 1rem;
		color: #B674FD;
	}
	
	#account .hint span:nth-of-type(2) {
		font-size: 0.8rem;
		color: #999;
	}
	
	#account .main {
		width: 94.7%;
		margin: 0 auto;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#account .container {
		width: 95%;
		margin: 0 auto;
	}
	
	#account .center input {
		font-size: 1.1rem;
		color: #CCCCCC;
		letter-spacing: 0;
		opacity: 0.5;
	}
	
	#account .center label {
		display: inline-block;
		width: 5rem;
		color: #666666;
	}
	
	#account .center .signtop,
	#account .center .signbottom,
	#account .center .signcenter {
		padding: 1rem 0;
		font-size: 1.1rem;
		color: #333333;
		letter-spacing: 0;
	}
	
	#account .center .signbottom {
		padding: 0.5rem 0;
	}
	
	#account .center .signtop,
	#account .center .signbottom {
		border-bottom: 1px solid #F5F5F5;
	}
	
	#account .center .signbottom button {
		padding: 0.5rem 1rem;
		background: #FFFFFF;
		border: 1px solid #B674FD;
		border-radius: 3px;
		color: #B674FD;
	}
	
	#account .btn {
		width: 100%;
		margin-top: 8rem;
	}
	
	#account .btn button {
		padding: 0.6rem 4rem;
		background: #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.39);
		border-radius: 3px;
		color: white;
		display: block;
		margin: 0 auto;
	}
</style>