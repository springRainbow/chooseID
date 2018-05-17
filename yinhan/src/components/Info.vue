<template>
	<div id='wrap' v-cloak>
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>完善信息</font>
			</div>
		</div>-->
		<div class="section">
			<div class="baseitem">
				<dl>
					<img src="../../static/img/1.png" alt="" style='border-radius: 50%;'>
					<dt>
                        <dd>丹丹单</dd>
                    </dt>
				</dl>
				<h1>请输入您的基本信息</h1>
				<p>
					<label for="">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
					<input type="text" placeholder="请输入姓名" v-model="personal.name">
				</p>
				<p>
					<label for="">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</label>
					<input type="text" placeholder="请输入年龄" v-model="personal.age">
				</p>
				<p>
					<label for="">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>
					<el-radio v-model="personal.sex" label="男">男</el-radio>
					<el-radio v-model="personal.sex" label="女">女</el-radio>
				</p>
				<p style='border:none;'>
					<label for="">婚姻状况：</label>
					<el-radio @change="change()" v-model="personal.status" label="0">未婚</el-radio>
					<el-radio @change="change()" v-model="personal.status" label="1">离异</el-radio>
					<el-radio @change="change()" v-model="personal.status" label="2">丧偶</el-radio>
				</p>
				<div class="load" v-show="show">
					<p>请上传身份证正反面</p>
					<el-upload action="https://jsonplaceholder.typicode.com/posts/" 
					list-type="picture-card" 
					:on-preview="handlePictureCardPreview" 
					:on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</div>
				<div class="load" v-show="show1">
					<p>请上传离婚证明</p>
					<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</div>
				<div class="newimg load" v-show="show2">
					<p>请上传死亡证明</p>
					<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</div>
				<p>
					<label for="" style="margin-left: -0.9rem;">户籍所在地：</label>
					<input type="text" placeholder="请输入您户籍所在地" v-model="personal.location">
				</p>
				<p>
					<label for="">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高：</label>
					<input type="text" placeholder="请输入身高(cm)" v-model="personal.hegiht">
				</p>
				<p>
					<label for="">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重：</label>
					<input type="text" placeholder="请输入体重(kg)" v-model="personal.weight">

				</p>
				<p for="">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</label>
					<input type="text" placeholder="请输入民族" v-model="personal.national">
				</p>
				<p>
					<label for="" style="margin-left: -0.9rem;">职业及职务：</label>
					<input type="text" placeholder="请输入您职业及职务" v-model="personal.postion">
				</p>
				<p>
					<label for="">月&nbsp;&nbsp;收&nbsp;&nbsp;入：</label>
					<input type="text" placeholder="请输入您的月收入" v-model="personal.income">
				</p>
				<p>
					<label for="">最高学历：</label>
					<input type="text" placeholder="请输入您的最高学历" v-model="personal.education">
				</p>
				<p>
					<label for="">住房情况：</label>
					<el-radio v-model="personal.housing" label="0" style="margin-left: -0.1rem;">无</el-radio>
					<el-radio v-model="personal.housing" label="1">租房</el-radio>
					<el-radio v-model="personal.housing" label="2">自有租房</el-radio>
					<el-radio v-model="personal.housing" label="3">其他</el-radio>
				</p>

				<p>
					<label for="">家庭住址：</label>
					<input type="text" placeholder="请输入您的家庭住址" v-model="personal.familyLocal">
				</p>
				<p>
					<label for="">联系方式：</label>
					<input type="text" placeholder="请输入您的联系方式" v-model="personal.number">
				</p>
				<p>
					<label for="">身份证号：</label>
					<input type="text" placeholder="请输入您的身份证号" v-model="personal.IDcard">
				</p>
				<p>
					<label for="">子女情况：</label>
					<el-radio v-model="personal.children" label="0">无</el-radio>
					<el-radio v-model="personal.children" label="1">有</el-radio>
				</p>
				<p>
					<label for="">爱好特长：</label>
					<input type="text" placeholder="请输入您的爱好特长" v-model="personal.hobby">
				</p>
				<p>
					<label for="">自我介绍：</label>
					<input type="text" placeholder="请输入自我介绍" v-model="personal.bewrite">
				</p>
			</div>
			<div class='required baseitem'>
				<h1>择偶要求</h1>
				<p>
					<label for="">年&nbsp;&nbsp;龄&nbsp;&nbsp;段：</label>
					<input type="text" placeholder="请选择年龄段" v-model="selection.agePart" @click='isCheck =!isCheck'>
					<span class='moreAge' @click='isCheck =!isCheck'>
                        <i class="el-icon-arrow-right"></i>
                    </span>
				</p>
				<p>
					<label for="">居&nbsp;&nbsp;住&nbsp;&nbsp;地：</label>
					<input type="text" placeholder="请输入居住地" v-model="selection.address">
				</p>
				<p>
					<label for="">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高：</label>
					<input type="text" placeholder="请输入身高（cm）" v-model="selection.height">
				</p>
				<p>
					<label for="">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重：</label>
					<input type="text" placeholder="请输入体重（kg）" v-model="selection.weight">
				</p>
				<p>
					<label for="" style="margin-left: -0.9rem;">户籍所在地：</label>
					<input type="text" placeholder="请输入您户籍所在地" v-model="selection.local">
				</p>
				<p>
					<label for="">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</label>
					<input type="text" placeholder="请输入民族" v-model="selection.nation">
				</p>
				<p>
					<label for="">月&nbsp;&nbsp;收&nbsp;&nbsp;入：</label>
					<input type="text" placeholder="请输入您的月收入" v-model="selection.income">
				</p>
				<p>
					<label for="">最高学历：</label>
					<input type="text" placeholder="请输入您的最高学历" v-model="selection.education">
				</p>
				<p>
					<label for="">婚姻状况：</label>
					<el-radio v-model="selection.status" label="0">未婚</el-radio>
					<el-radio v-model="selection.status" label="1">离异</el-radio>
					<el-radio v-model="selection.status" label="2">丧偶</el-radio>
				</p>
				<p>
					<label for="">兴趣爱好：</label>
					<input type="text" placeholder="请输入您期望他/她的兴趣爱好" v-model="selection.hobby">
				</p>
				<p>
					<label for="">子女情况：</label>
					<el-radio v-model="selection.children" label="0">无</el-radio>
					<el-radio v-model="selection.children" label="1">有</el-radio>
				</p>
				<p>
					<label for="">住房情况：</label>
					<el-radio v-model="selection.housing" label="0" style="margin-left: -0.1rem;">无</el-radio>
					<el-radio v-model="selection.housing" label="1">租房</el-radio>
					<el-radio v-model="selection.housing" label="2">自有租房</el-radio>
					<el-radio v-model="selection.housing" label="3">其他</el-radio>
				</p>
			</div>
			<div class="btn" style="margin-bottom: 4rem;">
				<span @click="getData()">确定</span>
			</div>

			<div class="mark" v-show='isCheck'>
				<div class="mark_content">
					<div class="list">
						<span @click='isCheck =!isCheck' style="margin-left: 4%;font-size: 1.07rem;color: #999999">取消</span>
						<h2 style="font-size: 1.14rem;">年龄段</h2>
						<span style="margin-right: 4%;font-size: 1.07rem;color: #B674FD" @click='isCheck =!isCheck'>确定</span>
					</div>
					<ul>
						<li @click="choose(items)" v-for="(items,index) in selectData">
							{{items}}
						</li>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	//  import FormPage from './FormPage.vue'
	export default {
		name: 'Info',
		data() {
			return {
				isCheck: false,
				dialogImageUrl: '',
				dialogVisible: false,
				//下拉框数据
				selectData: ['40 ~ 50', '51 ~ 60', '61 ~ 70', '71以上'],
				address: null,
				children: null,
				personal: {
					name: '', //姓名
					age: '', //年龄
					height: "", //身高
					weight: "", //体重
					postion: '', //职位
					income: '', //收入
					education: "", //教育背景
					familyLocal: "", //家庭住址
					number: "", //手机号码
					IDcard: '', //身份证号
					hobby: '', //爱好
					sex: "男", //性别
					status: '0', //婚姻状况，
					location: '', //户籍所在地，
					national: '', //民族
					children: '0', //子女状况
					bewrite: '', //自我介绍
					housing: '0' //住房情况
				},
				selection: { //择偶标准
					agePart: "", //年龄段
					address: '', //地址
					weight: '', //体重
					height: '', //身高
					children: '0', //子女情况
					status: '0', //婚姻状态
					local: '', //户籍所在地
					nation: '', //名族
					income: '', //收入
					hobby: '', //爱好
					housing: '0', //住房情况
					education: '' //学历
				},
				show: true,
				show1: false,
				show2: false,
				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			console.log(this.personal.name)
			this.change()
			//			this.getData()
		
		},
		methods: {
			//下拉框数据选取
			choose(items) {
				this.selection.agePart = items
			},
			//未婚丧偶离异切换
			change() {
				if(this.personal.status == 0) {
					this.show = true
					this.show1 = false;
					this.show2 = false;
				}
				if(this.personal.status == 1) {
					this.show = false;
					this.show1 = true;
					this.show2 = false
				}
				if(this.personal.status == 2) {
					this.show = false;
					this.show1 = false;
					this.show2 = true
				}
			},
			//数据获取
			getData() {
				if(this.personal.sex == "男") {
					this.personal.sex = "男"
				} else {
					this.personal.sex = "女"
				}
				let trueName = this.personal.name.toString()
				let trueAge = this.personal.age.toString()
				let trueIDcard = this.personal.IDcard.toString()
				let trueNumber = this.personal.number.toString()
				let trueHeight = this.personal.height.toString()
				console.log(trueHeight)
				let trueLocation = this.personal.location.toString()
				let trueWeight = this.personal.weight.toString()
				let truePostion = this.personal.postion.toString()
				let trueIncome = this.personal.income.toString()
				let trueEducation = this.personal.education.toString()
				let trueFamilyLocal = this.personal.familyLocal.toString()
				let trueHobby = this.personal.hobby.toString()
				let trueNational = this.personal.national.toString()
				let trueBewrite = this.personal.bewrite.toString()
				let trueChildren = this.personal.children
				switch(trueChildren) {
					case 0:
						this.personal.children = "无";
						break
					case 1:
						this.personal.children = "有";
						break
				}
				let status = this.personal.status
				switch(status) {
					case 0:
						this.personal.status = "未婚";
						break
					case 1:
						this.personal.status = "离异";
						break
					case 2:
						this.personal.status = "丧偶";
						break
				}
				let housing = this.personal.housing
				switch(housing) {
					case 0:
						this.personal.housing = "无";
						break
					case 1:
						this.personal.housing = "租房";
						break
					case 2:
						this.personal.housing = "自有住房";
						break
					case 3:
						this.personal.housing = "其他";
						break
				}
				//择偶标准
				let seleAgePart = this.selection.agePart.toString()
				let seleWeight = this.selection.weight.toString()
				let seleHeight = this.selection.height.toString()
				let seleChildren = this.selection.children
				switch(seleChildren) {
					case 0:
						this.selection.children = "无";
						break
					case 1:
						this.selection.children = "有";
						break
				}
				let seleAddress = this.selection.address.toString()
				let seleStatus = this.selection.status
				switch(seleStatus) {
					case 0:
						this.selection.status = "未婚";
						break
					case 1:
						this.selection.status = "离异";
						break
					case 2:
						this.selection.status = "丧偶";
						break
				}
				let seleLocal = this.selection.local.toString()
				let seleNation = this.selection.nation.toString()
				let seleIncome = this.selection.income.toString()
				let seleHobby = this.selection.hobby.toString()
				let seleEducation = this.selection.education.toString()
				let seleHousing = this.selection.housing
				switch(seleHousing) {
					case 0:
						this.personal.seleHousing = "无";
						break
					case 1:
						this.personal.seleHousing = "租房";
						break
					case 2:
						this.personal.seleHousing = "自有住房";
						break
					case 3:
						this.personal.seleHousing = "其他";
						break
				}

				var _this = this
				this.$http({
					method: "post",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/member",
					params: {
						true_name: trueName,
						age: trueAge,
						sex: _this.personal.sex,
						marital: _this.personal.status,
						register_address: trueLocation,
						height: trueHeight,
						weight: trueWeight,
						nation: trueNational,
						worker: truePostion,
						education: trueEducation,
						income: trueIncome,
						house_status: _this.personal.housing,
						address: trueFamilyLocal,
						idcard: trueIDcard,
						tel: trueNumber,
						children_status: _this.personal.children,
						hobby: trueHobby,
						bewrite: trueBewrite,
						//择偶要求
						con_age: seleAgePart,
						con_register_address: seleLocal,
						con_address: seleAddress,
						con_height: seleHeight,
						con_nation: seleNation,
						con_weight: seleWeight,
						con_income: seleIncome,
						con_marital: _this.selection.status,
						con_hobby: seleHobby,
						con_children_status: _this.selection.children,
						con_house_status: _this.selection.housing,
						con_education: seleEducation
					},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					console.log(res)
					console.log(333)
					this.$router.push({
						path:'/'
					})
					// console.log(_this.member)
					// console.log("sum"+_this.sum)
				}).catch(res => {
					console.log(res)
				})
			},
			moreAge: () => {
				console.log(1111);
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			getOn() {
				this.$router.go("-1")
			}
		}
	}
</script>

<style scoped>
	body {
		overflow-y: scroll;
	}
	
	#wrap {
		position: relative;
		overflow: hidden;
	}
	
	#wrap .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#wrap .head img {
		width: 100%;
		max-width: 100%;
	}
	
	#wrap .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#wrap .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#wrap .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#wrap .btn>span {
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
	
	#wrap .moreAge {
		font-weight: bolder;
		font-size: 1.3rem;
	}
	
	#wrap .section {
		padding: .8rem;
	}
	
	#wrap .baseitem,
	#wrap .required {
		padding: 0 1rem;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#wrap .required {
		margin-top: 1rem;
		padding-top: 1rem;
	}
	
	#wrap h1 {
		margin: 1rem 0;
		font-size: 1.21rem;
	}
	
	#wrap .baseitem p,
	#wrap .required p {
		line-height: 3.5rem;
		display: flex;
		border-bottom: 1px solid #eeeeee;
		align-items: center;
		flex-direction: center;
		padding-right: 1rem;
	}
	
	#wrap .baseitem dl {
		display: flex;
		padding-top: 1rem;
		font-size: 1.07rem;
	}
	
	#wrap .baseitem dl dt img {
		width: 100%;
		height: auto;
	}
	
	#wrap .baseitem dl dd {
		margin-left: 1rem;
		margin-top: 2rem;
	}
	
	#wrap .baseitem p label {
		display: inline-block;
		/*width: 8rem;*/
	}
	
	#wrap .baseitem p input {
		flex: 1;
		border: none;
		outline: none;
		padding-left: .5rem;
		background-color: #fff;
		border-radius: 5px;
		height: 1.5rem;
	}
	
	#wrap .baseitem p textarea {
		height: 3rem;
		border: none;
		outline: none;
		padding-left: .5rem;
		color: black;
	}
	
	#wrap .baseitem p input::-webkit-input-placeholder {
		color: #CCCCCC;
		font-size: 1rem;
	}
	
	#wrap .el-radio__input.is-checked .el-radio__inner {
		border-color: #B674FD;
		background: #B674FD;
	}
	/* 弹出层 */
	
	#wrap .mark {
		/*position: absolute;*/
		position: fixed;
		/*top: 0;*/
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	#wrap .mark_content {
		position: absolute;
		top: 71%;
		bottom: 0;
		left: 50%;
		width: 100%;
		transform: translate(-50%, 0);
		background-color: #fff;
		padding: 0.5rem;
	}
	
	#wrap .mark_content>.list {
		display: flex;
		justify-content: space-between;
		line-height: 3rem;
		border-bottom: 1px solid #EEEEEE;
	}
	
	#wrap .mark_content>ul {
		padding: 1rem;
		text-align: center;
	}
	
	#wrap .mark_content>ul>li {
		display: flex;
		line-height: 2.5rem;
		justify-content: center;
	}
	
	#wrap .mark_content>ul>li:hover {
		background-color: #B674FD;
		color: #fff;
	}
	/* 上传图片 */
	
	#wrap .load div {
		display: flex;
		border-bottom: 1px solid #eeeeee;
		padding: 1rem 3rem;
	}
	
	#wrap .load div input {
		flex: 1;
		width: 100%;
	}
	
	#wrap .el-radio {
		display: flex;
	}
	
	#wrap .el-upload,
	#wrap .el-upload--picture-card {
		background-color: #fbfdff;
		border: 1px dashed #c0ccda;
		border-radius: 6px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 148px;
		height: 148px;
		line-height: 146px;
		vertical-align: top;
		background: url(../../static/img/15.png) no-repeat!important;
	}
	
	#wrap .nomarry_con img {
		width: 5.43rem;
		height: 3.43rem;
	}
</style>
<style>
	#wrap .el-radio__input.is-checked .el-radio__inner {
		border-color: #B674FD;
		background: #B674FD;
	}
	
	#wrap .el-radio__input.is-checked+.el-radio__label {
		color: #B674FD;
	}
	
	#wrap .el-radio__inner {
		border-radius: 20%;
	}
	
	#wrap .el-radio+.el-radio {
		margin: 4px;
	}
	
	#wrap .el-radio__label {
		padding-left: 7px;
	}
	/*.el-upload--picture-card {
		position: relative;
		width: 4.43rem;
		height: 4.43rem;
		background: #EEEEEE;
		border-radius: 3px;
	}*/
	
	#wrap .el-icon-plus {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	#wrap .el-upload-list--picture-card .el-upload-list__item {
		width: 4.43rem;
		height: 4.43rem;
		background: #EEEEEE;
		border-radius: 3px;
	}
	
	#wrap .el-radio {
		margin-left: 6px;
	}
	
	#wrap .el-radio__input {
		margin-right: -7px;
	}
	
	#wrap .el-upload--picture-card {
		position: relative;
		width: 4.43rem;
		height: 4.43rem;
		background: #EEEEEE;
		border-radius: 3px;
	}
</style>