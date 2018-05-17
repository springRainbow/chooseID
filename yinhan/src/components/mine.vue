<template>
	<div id="mine">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>我的</font>
			</div>
		</div>-->
		<header>
			<div class="top">
				<div class="topone">
					<img src="../../static/img/18.png" alt="图片加载有误" />
				</div>
				<div class="main">
					<ul>
						<li>{{me.name}}</li>
						<li>
							<span>活跃度</span>
							<img src="../../static/img/symbols-fi活跃度.png" alt="图片加载有误" /><img src="../../static/img/symbols-fi活跃度.png" alt="图片加载有误" /><img src="../../static/img/symbols-fi活跃度.png" alt="图片加载有误" /><img src="../../static/img/symbols-fi活跃度.png" alt="图片加载有误" />
						</li>
						<li>
							自我介绍：<span>相亲相爱一辈子，永远到白头</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="bottomm">
				<div class="bottom_item" @click="goGz">
					<div class="bottomone">
						<img src="../../static/img/symbols-关注.png" alt="图片加载有误" />
						<p>我关注的</p>
					</div>
				</div>
				<div class="bottom_item" @click="goZg">
					<div class="bottomone">
						<img src="../../static/img/symbols-关注我的.png" alt="图片加载有误" />
						<p>关注我的</p>
					</div>
				</div>
				<div class="bottom_item" @click="goMxd">
					<div class="bottomone">
						<img src="../../static/img/symbols-我心动的.png" alt="图片加载有误" />
						<p>我心动的</p>
					</div>
				</div>
				<div class="bottom_item" @click="goXdw">
					<div class="bottomone">
						<img src="../../static/img/symbols-对我心动.png" alt="图片加载有误" />
						<p>对我心动</p>
					</div>
				</div>
			</div>
		</header>

		<section class="picture">
			<p>请上传您的5张生活照</p>
			<div class="picture_item">
				<el-upload name="album" action="http://yinhan-media.weiyingjia.org/api/yinhan/memberalbum" 
				list-type="picture-card" 
				:headers="header" 
					 multiple:limit="5" 
					 :on-exceed="handleExceed" 
					 :on-preview="handlePictureCardPreview" 
					>

					<i class="el-icon-plus"></i>
				</el-upload>
			</div>
		</section>
		<section class="set">
			<div class="setitem" @click="goWsxx">
				<div class="setleft">
					<img src="../../static/img/symbols-账号安全.png" alt="图片加载有误" />
					<p>编辑信息</p>
				</div>
				<div class="setright">
					<img src="../../static/img/24.png" alt="图片加载有误" />
				</div>
			</div>
			<div class="setitem" @click="go">
				<div class="setleft">
					<img src="../../static/img/symbols-账号安全.png" alt="图片加载有误" />
					<p>账号管理</p>
				</div>
				<div class="setright">
					<img src="../../static/img/24.png" alt="图片加载有误" />
				</div>
			</div>
			<div class="setitem" @click="goMe">
				<div class="setleft">
					<img src="../../static/img/symbols-消息.png" alt="图片加载有误" />
					<p>消息</p>
				</div>
				<div class="setright">
					<img src="../../static/img/24.png" alt="图片加载有误" />
				</div>
			</div>
			<div class="setitem" @click="goXhjl">
				<div class="setleft">
					<img src="../../static/img/symbols-邂逅记录.png" alt="图片加载有误" />
					<p>邂逅记录</p>
				</div>
				<div class="setright">
					<img src="../../static/img/24.png" />
				</div>
			</div>
			<div class="setitem" @click="goZf">
				<div class="setleft">
					<img src="../../static/img/symbols-我的支付.png" alt="图片加载有误" />
					<p>我的支付</p>
				</div>
				<div class="setright">
					<img src="../../static/img/24.png" alt="图片加载有误" />
				</div>
			</div>
			<div class="setitem" @click="goXy">
				<div class="setleft">
					<img src="../../static/img/symbols-注册协议.png" alt="图片加载有误" />
					<p>选择服务号会员注册协议</p>
				</div>
				<div class="setright">
					<img src="../../static/img/24.png" alt="图片加载有误" />
				</div>
			</div>
		</section>
		<!--<section class="btn" @click="goOut" style="margin-bottom: 5rem;">
			<button>退出登录</button>
		</section>-->
	</div>
</template>

<script>
	export default {
		name: "mine",
		data() {
			return {
				me: [],
				dialogImageUrl: '',
				dialogVisible: false,
				fileList: [

				],
				imageMes: "",
				imageUrl: "",
				imgNum: 0,
				idImg: null, //图片id
				tokenNew: "",
				//上传参数
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			this.mine();
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			},
			go() {
				this.$router.push({
					path: "/account"
				})
			},
			//			goOut() {
			//				this.$router.push({
			//					path: "/login"
			//				})
			//			},
			goMe() {
				this.$router.push({
					path: "/me"
				})
			},
			goGz() {
				this.$router.push({
					path: "/meinterest"
				})
			},
			goZg() {
				this.$router.push({
					path: "/interestme"
				})
			},
			goXy() {
				this.$router.push({
					path: "/agreement"
				})
			},
			goMxd() {
				this.$router.push({
					path: "/meheartbeat"
				})
			},
			goXdw() {
				this.$router.push({
					path: "/heartbeatme"
				})
			},
			goZf() {
				this.$router.push({
					path: "/payment"
				})
			},
			goWsxx() {
				this.$router.push({
					path: "/Info"
				})
			},
			goXhjl() {
				this.$router.push({
					path: "/record"
				})
			},
			//			gvrp() {
			//				axios({
			//					method: "get",
			//					url: "http://yinhan-media.weiyingjia.org/api/yinhan/rule/{id=1}"
			//				}).then(res => {
			//					console.log(res)
			//				})
			//			},
			mine() {
				var _this = this;
				this.$http({
						method: "get",
						url: "http://yinhan-media.weiyingjia.org/api/yinhan/my",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + this.tokenNew
						}
					}).then(res => {
						console.log(res)
						_this.me = res.data.data
					})
					.catch(error => {
						throw error
					})
			},
			
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleExceed: (files, fileList) => {
				this.$message.warning('限制为5张图片哦！');
			}
			
		},
		computed:{
			header(){
				return{
					"Authorization": "Bearer " + this.tokenNew
				}
			}
		},
		created() {
			//			this.gvrp()

		}
	}
</script>

<style>
	#mine .head {
		width: 100%;
		padding-bottom: 0.1rem;
	}
	
	#mine .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#mine .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#mine .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#mine header {
		position: relative;
		width: 100%;
		height: 11rem;
		background-image: linear-gradient(125deg, #B674FD 10%, #CB9DFD 50%);
		border-radius: 0 0 20% 20%;
	}
	
	#mine .top {
		display: flex;
		/*justify-content: space-around;*/
	}
	
	#mine .topone {
		width: 5.43rem;
		padding: 1rem;
	}
	
	#mine .topone img {
		border: 2px solid white;
		border-radius: 50%;
		width: 100%;
		max-width: 100%;
	}
	
	#mine .main ul {
		padding: 1rem 1rem 1rem 0;
		line-height: 1.8;
	}
	
	#mine .main ul li:nth-of-type(1) {
		font-size: 1.2rem;
		letter-spacing: 0;
		color: white;
	}
	
	#mine .main ul li:nth-of-type(2) {
		font-size: 1rem;
		color: white;
	}
	
	#mine .main ul li:nth-of-type(2) img {
		width: 0.92rem;
	}
	
	#mine .main ul li:nth-of-type(3) {
		width: 120%;
		font-size: 0.8rem;
		color: white;
		font-weight: 100;
	}
	
	#mine .bottomm {
		width: 95%;
		margin: 0 auto;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 rgba(182, 116, 253, 0.40);
		border-radius: 3px;
		display: flex;
		justify-content: space-around;
	}
	
	#mine .bottom_item {
		padding: 1rem 0;
	}
	
	#mine .bottomone {
		display: flex;
		flex-direction: column;
		line-height: 2;
		font-size: 1.1rem;
	}
	
	#mine .bottomone img {
		width: 1.69rem;
		height: 1.71rem;
		margin: 0 auto;
	}
	
	#mine .picture {
		width: 95%;
		margin: 0 auto;
		margin-top: 4rem;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#mine .picture p {
		color: #333;
		font-size: 1.1rem;
		padding: 0.8rem;
	}
	
	#mine .picture_item {
		padding: 0 0.8rem 0.8rem 0.8rem;
		display: flex;
		justify-content: space-between;
	}
	
	#mine .pictureone {
		width: 4.43rem;
		height: 4.43rem;
		background: #EEEEEE;
		border-radius: 3px;
	}
	
	#mine .set {
		width: 95%;
		margin: 1rem auto;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#mine .setitem {
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0;
		border-bottom: 1px solid #F5F5F5;
	}
	
	#mine .setleft {
		display: flex;
	}
	
	#mine .setleft img {
		width: 1.34rem;
		height: 1.29rem;
		margin: auto;
	}
	
	#mine .setleft p {
		padding: 0.5rem;
		margin-left: 0.5rem;
		font-size: 1.1rem;
		color: #333333;
	}
	
	#mine .setright {
		width: 1.5rem;
		display: flex;
		height: 2rem;
	}
	
	#mine .setright img {
		width: 100%;
		margin: auto;
		padding-top: 0.7rem;
	}
	
	#mine .btn {
		width: 100%;
	}
	
	#mine .btn button {
		padding: 0.7rem 4rem;
		background: #FFFFFF;
		border: 1px solid #B674FD;
		border-radius: 3px;
		color: #B674FD;
		margin: 3rem auto;
		display: block;
	}
</style>
<style>
	#mine .el-upload--picture-card {
		position: relative;
		width: 4.43rem;
		height: 4.43rem;
		background: #EEEEEE;
		border-radius: 3px;
	}
	
	#mine .el-icon-plus {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	#mine .el-upload-list--picture-card .el-upload-list__item {
		width: 4.43rem;
		height: 4.43rem;
		background: #EEEEEE;
		border-radius: 3px;
	}
</style>