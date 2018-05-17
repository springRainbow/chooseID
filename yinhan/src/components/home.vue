<template>
	<div id="home">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:"></a>
				<font>选择服务号</font>
			</div>
		</div>-->
		<div class="banner">
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
		<div class="criteria">
			<ul class="criteria_item">
				<li class="header">
					<font class="size">择偶条件</font>
				</li>
				<li>
					<div class="age">
						<li>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄 :</li>
						<li @click="index=0" :class="index==0?'active':''">全选</li>
						<li @click="index=1" :class="index==1?'active':''">40~50</li>
						<li @click="index=2" :class="index==2?'active':''">51~60</li>
						<li @click="index=3" :class="index==3?'active':''">61~70</li>
						<li @click="index=4" :class="index==4?'active':''">71以上</li>
					</div>
					<div class="age">
						<li>婚姻状况 :</li>
						<li @click="aindex=0" :class="aindex==0?'active':''" style="padding: 0.4rem 1rem;">全选</li>
						<li @click="aindex=1" :class="aindex==1?'active':''" style="padding: 0.4rem 1rem;">未婚</li>
						<li @click="aindex=2" :class="aindex==2?'active':''" style="padding: 0.4rem 1rem;">离异</li>
						<li @click="aindex=3" :class="aindex==3?'active':''" style="padding: 0.4rem 1rem;">丧偶</li>
					</div>
					<div class="age">
						<li>居&nbsp;住&nbsp;&nbsp;地 :</li>
						<li @click="bindex=0" :class="bindex==0?'active':''" style="padding: 0.4rem 1rem;">全选</li>
						<li @click="bindex=1" :class="bindex==1?'active':''" style="padding: 0.4rem 1rem;">北京</li>
						<li @click="bindex=2" :class="bindex==2?'active':''" style="padding: 0.4rem 1rem;">天津</li>
						<li @click="bindex=3" :class="bindex==3?'active':''" style="padding: 0.4rem 1rem;">河北</li>
					</div>
					<div class="age" @click='isCheck =!isCheck'>
						<li>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍 :</li>
						<li @click="cindex=0" :class="cindex==0?'active':''" style="padding: 0.4rem 1rem;">全选</li>
						<li @click="cindex=1" :class="cindex==1?'active':''" style="padding: 0.4rem 1rem;">北京</li>
						<li @click="cindex=2" :class="cindex==2?'active':''" style="padding: 0.4rem 1rem;">天津</li>
						<li @click="cindex=3" :class="cindex==3?'active':''" style="padding: 0.4rem 1rem;">河北</li>
						<!-- <li @click="cindex=4" :class="cindex==4?'active':''" style="padding: 0.4rem 1rem;">其他</li> -->
					</div>
				</li>
			</ul>
		</div>
		<div class="allinformation">
			<div class="message" v-for="(items,index) in member" @click="go(index)">
				<div class="photo">
					<img src="../../static/img/1.png" />
				</div>
				<div class="information">
					<span>{{items.true_name}}</span>
					<div>
						<font class="annum">{{items.age}}岁</font>
						<font class="stature">{{items.height}}cm</font>
					</div>
					<span>户籍所在地：{{items.household_register_address}}</span>
				</div>
				<div class="area">
					{{items.address}}
				</div>
			</div>
		</div>
		<div class="mark" v-show='isCheck'>
			<div class="mark_content">
				<div class="list">
					<span @click='isCheck =!isCheck' style="margin-left: 4%;font-size: 1.07rem;color: #999999">取消</span>
					<h2 style="font-size: 1.14rem;">户口所在地</h2>
					<span style="margin-right: 4%;font-size: 1.07rem;color: #B674FD" @click='isCheck =!isCheck'>确定</span>
				</div>
				<div class='text'>
					<div class="cut_line cut_line_top"></div>
					<div class="cut_line"></div>
					<ul>
						<li v-for='(item,index) in area'>
							{{item}}
						</li>
					</ul>
					<ul>
						<li v-for='(item,index) in address'>
							{{item}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'home',
		data() {
			return {
				index: 0,
				aindex: 0,
				bindex: 0,
				cindex: 0,
				isCheck: false,
				popupVisible: false,
				area: ['北京', '天津', '河北'],
				address: ['不限', '东城区', '西城区', '朝阳区', '昌平区', '怀柔区', '丰台区', '石景山区', '大兴区', '海淀区', '门头沟区', '房山区', '通州区', '顺义区', '平谷区', '密云区', '延庆区'],
				//				bannerList: [{
				//					img: "../../static/img/symbols-banner.png"
				//				}, {
				//					img: "../../static/img/symbols-banner.png"
				//				}, {
				//					img: "../../static/img/symbols-banner.png"
				//				}, {
				//					img: "../../static/img/symbols-banner.png"
				//				}],
				member: '', //数据保存
				sendId: [],
				tokens: '',
				ages: "",
				marital: "",
				idcard: "",
				household_register_address: ""
			}
		},
		//		created() {
		//			this.require();
		//			console.log(location.href)
		//		},
		methods: {
			go(index) {
				console.log(typeof index)
				console.log(index + 1)
				// this.$bus.emit("send_id", index + 1)

				this.$router.push({
					path: "/options",
					query: {
						id: this.sendId[index]
					}
				})
			},
			addArea() {
				console.log(this.cindex);
				console.log(111)
			},
			handleClick() {
				this.popupVisible = true
			},
			UrlSearch() {
				var name, value;
				var str = window.location.href;
				console.log(str)
				var num = str.indexOf("?");
				str = str.substr(num + 1); //str得到?之后的字符串
				var arr = str.split("&"); //得到&分割的参数，放入数组中
				for(var i = 0; i < arr.length; i++) {
					num = arr[i].indexOf("=");
					if(num >= 0) {
						name = arr[i].substring(0, num);
						value = arr[i].substr(num + 1);
						this[name] = value;
					}
				}
				console.log(arr);
			},
			//轮播
			banner() {
				var _this = this;
				this.$http({
						method: "get",
						url: "http://yinhan-media.weiyingjia.org/api/yinhan/banners",
						params: {
							type: 1
						}
					}).then(res => {
						console.log(res.data.data)
					})
					.catch(error => {
						throw error
					})
			},
			//会员列表
			members() {
				let _this = this
				this.$http({
					method: "get",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/members",
					params: {
						ages: 0,
						marital: this.marital,
						idcard: this.idcard,
						household_register_address: this.household_register_address
					}
				}).then(res => {
					this.member = res.data.data
					console.log(this.member)
					this.member.map(function(value, index) {
						_this.sendId.push(value.id)
					})
				}).catch(res => {
					console.log(res)
				})
			},
			require() {
				this.tokens = sessionStorage.getItem("Token")
				// if (this.tokens = null) {
				var $login = window.sessionStorage.getItem("$login");
				var $url = "http://yinhan-media.weiyingjia.org/api/yinhan/wechatcode";
				this.UrlSearch()
				var Request = new this.UrlSearch();
				var code = Request.code;
				console.log(code)
				//					if(code) {
				this.$http({
					method: 'post',
					url: 'http://yinhan-media.weiyingjia.org/api/yinhan/wechatcode',
					// headers: {
					// 	"content-type": "application/x-www-form-urlencoded"
					// },
					params: {
						code: code
					}
				}).then(res => {
					//						alert("成功！")
					console.log(res.data.data.token);
					let Token = res.data.data.token
					this.tokens.sessionStorage.setItem("Token", Token)
				})
				// }
			}
		},
		mounted() {
			this.members();
			this.banner();
			this.require();
		}
	}
</script>
<style type="text/css">
	::-webkit-scrollbar {
		display: none;
	}
	
	#home {
		position: relative;
		overflow: hidden;
		width: 100%;
		margin-bottom: 5rem;
	}
	
	#home .head {
		width: 100%;
	}
	
	#home .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#home .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.65rem no-repeat;
		padding: 0.5rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#home .bottom font {
		display: inline-block;
		padding: 0.3rem 0;
	}
	
	#home .banner {
		width: 100%;
		height: 10.7rem;
	}
	
	#home .banner img {
		width: 100%;
		max-width: 100%;
	}
	
	#home .criteria {
		width: 100%;
		margin: 0 auto;
		/*padding: 1rem 0 0.5rem 1rem;*/
		box-shadow: 0 2px 9px 0 #F7F7F7;
	}
	
	#home .criteria_item li {
		line-height: 1.5rem;
	}
	
	#home .header {
		font-size: 1.1rem;
		color: #B674FD;
		letter-spacing: 0;
		font-weight: 900;
		border-bottom: 1px solid #f5f5f5;
	}
	
	#home .size {
		display: block;
		width: 17%;
		padding: 0.5rem;
		margin-left: 0.7rem;
		border-bottom: 2px solid #B674FD;
	}
	
	#home .age {
		display: flex;
		padding: 0.5rem 0 1.2rem 0;
	}
	
	#home .age li {
		padding: 0.4rem 0.6rem;
		font-size: 0.875rem;
		color: #666666;
		letter-spacing: 0;
	}
	
	#home .age li:first-child {
		margin-left: 0.3rem;
		font-size: 1.1rem;
		color: #000000;
		letter-spacing: 1.6px;
	}
	
	#home .active {
		opacity: 0.7;
		background: #B674FD;
		border-radius: 3px;
		color: white!important;
	}
	
	#home .allinformation {
		width: 94.7%;
		margin: 1rem auto;
	}
	
	#home .message {
		margin-top: 0.5rem;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
		padding: 0.3rem;
		display: flex;
		justify-content: space-around;
	}
	
	#home .photo {
		flex: 1;
	}
	
	#home .photo img {
		width: 100%;
	}
	
	#home .information {
		margin-left: 0.5rem;
		flex: 2;
		display: flex;
		flex-direction: column;
		line-height: 2.5;
	}
	
	#home .area {
		/*margin-left: 3.5rem;*/
		font-size: 0.9rem;
		color: #666666;
		flex: 0.8;
		letter-spacing: 0;
	}
	
	#home .information span:first-child {
		font-size: 1.1rem;
		color: #000000;
		letter-spacing: 0;
	}
	
	#home .information span:last-child {
		font-size: 0.9rem;
		color: #666666;
		letter-spacing: 0;
	}
	
	#home .annum {
		color: #B674FD;
	}
	
	#home .stature {
		margin-left: 0.5rem;
		padding: 0.1rem 0.25rem;
		border: 1px solid #B674FD;
		border-radius: 3px;
		color: #B674FD;
	}
	/* 弹出层 */
	
	#home .mark {
		position: fixed;
		bottom: 3.8rem;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	#home .mark_content {
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 100%;
		transform: translate(-50%, 0);
		background-color: #fff;
		padding: 0.5rem;
	}
	
	#home .mark_content>.list {
		display: flex;
		justify-content: space-between;
		line-height: 3rem;
		border-bottom: 1px solid #EEEEEE;
	}
	
	#home .text {
		display: flex;
		height: 14rem;
		overflow: hidden;
		padding-top: 1rem;
	}
	
	#home .mark_content>.text>ul {
		padding: 1rem;
		text-align: center;
		flex: 50%;
		height: 120%;
		overflow-y: scroll;
	}
	
	#home .mark_content>.text>ul>li {
		display: flex;
		line-height: 2.5rem;
		justify-content: center;
		color: #666666;
	}
	
	#home .mark_content>.text>ul>li:hover {
		color: #B674FD;
	}
	/* 地区选取分隔线 */
	
	#home .text {
		position: relative;
	}
	
	#home .cut_line {
		position: absolute;
		width: 90%;
		height: 1px;
		background: #EEEEEE;
		top: 45%;
		left: 5%;
	}
	
	#home .cut_line_top {
		top: 20%;
	}
	
	#home .el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	#home .el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	
	#home .el-carousel {
		z-index: 0;
		height: 100%;
	}
</style>