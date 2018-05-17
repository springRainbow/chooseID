<template>
	<div id="options">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>个人详情</font>
			</div>
		</div>-->
		<div class="main">
			<div class="banner">
				<img src="../../static/img/11.png" />
			</div>
			<div class="main_top">
				<div class="mainname">
					<ul class="mainnametop">
						<li>用户名：
							<span>{{member.name}}</span>
						</li>
						<li>相亲编号：{{member.numbering}}</li>
					</ul>
					<div class="mainnamebottom">
						<div class="mainnameleft">
							<ul>
								<li>
									年龄：
									<span>{{inn.age}}岁</span>
								</li>
								<li>
									名族：
									<span>{{inn.nation}}</span>
								</li>
								<li>
									体重：
									<span>{{inn.weight}}kg</span>
								</li>
								<li>
									最高教育程度：
									<span>{{inn.education}}</span>
								</li>
								<li>
									月收入：
									<span>{{inn.income}}</span>
								</li>
								<li>
									备车情况：
									<span>有车</span>
								</li>
							</ul>
						</div>
						<div class="mainnameright">
							<ul>
								<li>
									性别：
									<span>{{inn.sex}}</span>
								</li>
								<li>
									身高：
									<span>{{inn.height}}cm</span>
								</li>
								<li>
									婚姻状况：
									<span>{{inn.marital}}</span>
								</li>
								<li>
									职业及职务：
									<span>{{inn.work}}</span>
								</li>
								<li>
									住房情况：
									<span>自有住房</span>
								</li>
								<li>
									子女情况：
									<span>{{member.audit}}个</span>
								</li>
							</ul>
						</div>
					</div>
					<ul class="speciality">
						<li>特长爱好：
							<span>{{inn.hobby}}</span>
						</li>
						<li>自我介绍：
							<span>性格直爽、喜欢自然的一切美好事物，勇于追求自己所喜欢的一切事物</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="mainfoot">
				<div class="mainfootbox">
					<ul>
						<li class="top">择偶标准</li>
						<li class="bottom">
							<div class="mainfootboxleft">
								<ul>
									<li>
										年龄段：
										<span>{{con.age}}岁</span>
									</li>
									<li>
										身高：
										<span>{{con.height}}cm</span>
									</li>
									<li>
										月收入：
										<span>{{con.income}}</span>
									</li>
									<li>
										户籍所在地：
										<span>{{con.household_register_address}}</span>
									</li>
									<li>
										子女情况：
										<span>2个</span>
									</li>
									<li>
										特长爱好：
										<span>{{con.hobby}}</span>
									</li>
								</ul>
							</div>
							<div class="mainfootboxright">
								<ul>
									<li>
										名族：
										<span>汉族</span>
									</li>
									<li>
										体重：
										<span>{{con.weight}}kg</span>
									</li>
									<li>
										婚姻状况：
										<span>{{con.marital}}</span>
									</li>
									<li>
										居住地：
										<span>{{con.address}}</span>
									</li>
									<li>
										住房情况：
										<span>自有住房</span>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<el-button type="text" @click="care()" v-show="watch">关注</el-button>
			<el-button type="text" @click="careoff()" v-show="watchoff" style="color: rgb(153, 153, 153);background: #F5F5F5;">取消关注</el-button>
			<!-- <button @click='isCheck=!isCheck'>对他心动</button> -->
			<el-button type="text" @click="open6">对他心动</el-button>
		</div>
		<!-- <el-button type="text" @click="open6">点击打开 Message Box</el-button> -->

	</div>
</template>

<script>
	export default {
		name: "options",
		data() {
			return {
				isCheck: false,
				listId: '', //bus传递的数据
				member: {}, //存储的数据
				time: "this is a good time",
				// 数据id
				sumId: "",
				watch: true,
				watchoff: false,
				tokenNew: '',
				inn: {},
				con: {},
				house: [{
					id: 0,
					info: "无"
				}, {
					id: 1,
					info: "租房"
				}, {
					id: 0,
					info: "自有住房"
				}, {
					id: 0,
					info: "其他"
				}, ]
			}
		},
		created() {
			this.sumId = this.$route.query.id
			this.personalData()
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
		},
		// mounted(){
		// 	console.log(this.$route.query.id)
		// 	this.sumId=this.$route.query.id
		// 	this.personalData()
		// },
		methods: {
			getOn() {
				this.$router.go("-1")
			},
			open6() {
				this.$confirm('支付9.9元可获得更进一步联系哟！', '对他心动', {
					confirmButtonText: '求牵',
					cancelButtonText: '取消',
					center: true
				}).then(() => {
					this.$confirm('求牵信息我们已经通知对方请您等待回应！', '恭喜您支付成功！', {
						center: true
					})
				}).catch(() => {
					this.$confirm('很抱歉您的求牵失败！您是否需要向她/他再次发起心动？', '失败', {
						confirmButtonText: '对她心动',
						cancelButtonText: '取消',
						center: true
					}).then(() => {
						this.open6();

					}).catch(() => {
						this.$message({
							type: 'info',
							message: '取消'
						});
					});

				});
			},

			commonAlert(title, alrm, btn1, btn2, msg1, msg2) {
				this.$confirm(title, alrm, {
					confirmButtonText: btn1,
					cancelButtonText: btn2,
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: msg1
					});

				}).catch(() => {
					this.$message({
						type: 'info',
						message: msg2
					});
				});
			},
			//个人详情数据
			personalData() {
				var _this = this
				this.$http({
					method: "get",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/member/" + _this.sumId,
					params: {},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					_this.member = res.data.data
					_this.inn = res.data.data.in
					_this.con = res.data.data.con
					console.log(res.data.data.in)
					console.log(_this.member)
				}).catch(res => {
					console.log(res)
				})

			},
			//关注
			care() {
				var _this = this
				this.$http({
					method: "post",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/follow",
					params: {
						be_member_id: _this.sumId
					},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					this.watch = false;
					this.watchoff = true;

				}).catch(res => {
					console.log(res)
				})
			},
			careoff() {
				var _this = this
				this.$http({
					method: "post",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/follow/del",
					params: {
						be_member_id: _this.sumId
					},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					this.watch = true;
					this.watchoff = false;
					console.log(res.data.data)
				}).catch(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	#options {
		position: relative;
		margin-bottom: 4rem;
	}
	
	#options .head {
		width: 100%;
		/*height: 6.6%;*/
	}
	
	#options .head img {
		width: 100%;
		max-width: 100%;
	}
	
	#options .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#options .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.65rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#options .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#options .main {
		width: 94.7%;
		margin: 0 auto;
		padding-top: 1rem;
		border-top: 1px solid #f5f5f5;
	}
	
	#options .main_top {
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#options .mainname {
		width: 95%;
		margin: 0 auto;
	}
	
	#options .mainnametop {
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		justify-content: space-between;
		padding: 0.6rem 0;
	}
	
	#options .mainnametop li:first-child {
		font-size: 1.2rem;
		color: #666666;
		letter-spacing: 0;
	}
	
	#options .mainnametop li:first-child span {
		color: #151515;
	}
	
	#options .mainnametop li:last-child {
		font-size: 1rem;
		color: #B674FD;
		margin-top: 0.35rem;
	}
	
	#options .mainnamebottom {
		margin-top: 0.5rem;
		display: flex;
	}
	
	#options .mainnamebottom li {
		font-size: 1.08rem;
		color: #666666;
		letter-spacing: 0;
		line-height: 2.5;
	}
	
	#options .mainnamebottom li span {
		color: #151515;
	}
	
	#options .mainnameright {
		margin-left: 2.8rem;
	}
	
	#options .speciality li {
		line-height: 2.5;
		font-size: 1.08rem;
		color: #666666;
		letter-spacing: 0;
	}
	
	#options .speciality li span {
		color: #151515;
	}
	
	#options .mainfoot {
		margin-top: 0.8rem;
		width: 100%;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#options .mainfootboxright {
		margin-right: 3rem;
	}
	
	#options .mainfootbox {
		width: 95%;
		margin: 0 auto;
	}
	
	#options .top {
		padding: 1rem 0 1.3rem 0;
		font-size: 1.2rem;
		color: black;
		font-weight: bolder;
	}
	
	#options .bottom {
		display: flex;
		justify-content: space-between;
	}
	
	#options .bottom li {
		line-height: 2.5;
		font-size: 1.08rem;
		color: #666666;
		letter-spacing: 0;
	}
	
	#options .bottom li span {
		color: #151515;
	}
	
	#options .footer {
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 3rem 0;
	}
	
	#options .footer button {
		padding: 0.8rem 0;
		width: 10.7rem;
	}
	
	#options .footer button:first-child {
		background: #FFFFFF;
		border: 1px solid #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.39);
		border-radius: 3px;
		color: #B674FD;
		font-size: 0.9rem;
	}
	
	#options .footer button:last-child {
		background: #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.39);
		border-radius: 3px;
		color: #FFFFFF;
		font-size: 0.9rem;
	}
	/* 弹出层 */
	
	#options .mark {
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	#options .mark_content {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 90%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	
	#options .mark_content>h2 {
		position: relative;
		text-align: left;
		line-height: 4rem;
		font-size: 1.7rem;
		border-bottom: 1px solid #EEEEEE;
		padding-left: 1rem;
	}
	
	#options .dele {
		position: absolute;
		top: 120%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 2.8rem;
		height: 2.8rem;
		line-height: 2.8rem;
		border-radius: 50%;
		background: #EEEEEE;
		font-size: 2rem;
		color: #A7A7A7;
	}
	
	
	.el-message-box--center {
    width: 80%;
    position: absolute;
    top: 40%;
    /* left: 10%; */
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    /* top: 0; */
    /* bottom: 0; */
}
</style>