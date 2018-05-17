<template>
	<div id="heartbeatme">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>对我心动</font>
			</div>
		</div>-->
		<div class="main">
			<button @click="index=0,bol=false,myLike(0)" :class="index==0?'active':''">我心动的</button>
			<button @click="index=1,bol=true,myLike(1)" :class="index==1?'active':''">对我心动</button>
		</div>
		<div class="select">
			<span @click='tipCheck2=false,tipCheck1=!tipCheck1'>状态选择
				<time v-if='tipCheck1'><img src="../../static/img/more_unfold.png"/></time>
				<time v-else><img src="../../static/img/less (1).png"/></time>
				<div class="txt" v-show='tipCheck1'>
					<span style="font-size: 0.8rem; padding: 0;" v-for='(item,index) in statusList' @click='statusChange(index)'>{{item}}</span>
		</div>
		</span>
		<span @click='tipCheck1=false,tipCheck2=!tipCheck2'>时间选择
				<time v-if='tipCheck2'><img src="../../static/img/more_unfold.png"/></time>
				<time v-else><img src="../../static/img/less (1).png"/></time>
				<div class="txtt" v-show='tipCheck2'>
					<span style="font-size: 0.8rem; padding: 0;" v-for='(item,index) in dateList' @click='timeChange(index)'>{{item}}</span>
	</div>
	</span>
	</div>
	<div class="figure" v-show="!bol">
		<div class="figureitem" v-for='(item,index) in listData' :key='item.id'>
			<div class="figureone" style="flex: 1;">
				<img :src="item.sender_img" />
			</div>
			<div class="figuretwo" style="flex: 2.5;">
				<p>
					<span>{{item.sender_name}}</span>
					<span>等待回应</span>
				</p>
				<p>
					<span>{{item.createtime}}</span>
					<!-- <span style="margin-left: 1rem;">15:33</span> -->
				</p>
			</div>
			<div class="figurethree" style="flex: 1;margin-top: 1.7rem;margin-right: 0.5rem;">
				<button>邀约中</button>
			</div>
		</div>
	</div>
	<div class="figure" v-show="bol">
		<div class="figureitem" v-for='(item,index) in listData' :key='item.id'>
			<div class="figureone" style="flex: 1;">
				<img :src="item.sender_img" />
			</div>
			<div class="figuretwo" style="flex: 2.5;">
				<p>
					<span>{{item.sender_name}}</span>
					<span>等待回应</span>
				</p>
				<p>
					<span>{{item.createtime}}</span>
					<!-- <span style="margin-left: 1rem;">15:33</span> -->
				</p>
			</div>
			<div class="figurethree" style="flex: 1;margin-top: 1.7rem;margin-right: 0.5rem;">
				<button>应邀</button>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name: "heartbeatme",
		data() {
			return {
				bol: false,
				index: 1,
				listData: null,
				tipCheck1: false,
				tipCheck2: false,
				dateList: ['全部', '今日', '一周以内', '半月以内'],
				statusList: ['应邀', '邀约中'],
				params: {
					idx: 1, //默认列表
					daterange: null, //日期范围
					status: null, //状态全责
				},
				tokenNew: ''

			}
		},
		mounted() {
			this.$nextTick(() => {
				this.commonAxios();
			})
			this.tokenNew = sessionStorage.getItem("Token")
		},
		methods: {
			commonAxios() {
				this.$http({
					method: "get",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/messages",
					params: this.params,
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					this.listData = res.data.data;
					console.log(this.listData)
				}).catch(res => {
					console.log(res)
				})

			},
			getOn() {
				this.$router.go("-1")
			},
			myLike(idx) {
				this.params.idx = idx + 1;
				this.commonAxios();
			},
			statusChange(idx) {
				this.params.status = idx + 1;
				console.log(this.params.status)
				this.commonAxios();
			},
			timeChange(idx) {
				this.params.daterange = idx + 1;
				console.log(this.params.daterange)
				this.commonAxios();
			}
		}
	}
</script>

<style>
	#heartbeatme .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#heartbeatme .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#heartbeatme .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#heartbeatme .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#heartbeatme .main {
		padding: 0.2rem;
		width: 94.8%;
		margin: 0 auto;
		margin-top: 1rem;
		background: #F3F3F3;
		border-radius: 3px;
		color: #999999;
		display: flex;
		justify-content: space-between;
	}
	
	#heartbeatme .main button {
		width: 49.5%;
		padding: 0.8rem 0;
		border-radius: 3px;
		font-size: 1.14rem;
		color: #999999;
		letter-spacing: 0;
	}
	
	#heartbeatme .select {
		width: 85%;
		margin: 0 auto;
		margin-top: 0.5rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #F5F5F5;
	}
	
	#heartbeatme .select span {
		text-align: center;
		display: block;
		width: 49.5%;
		padding: 0.3rem 0;
		color: #999999;
		font-size: 1.14rem;
	}
	
	#heartbeatme .figure {
		width: 94.7%;
		margin: 0 auto;
		margin-top: 1rem;
	}
	
	#heartbeatme .figureitem {
		display: flex;
		justify-content: space-around;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
		margin-top: 1rem;
	}
	
	#heartbeatme .figureone {
		padding: 0.6rem;
	}
	
	#heartbeatme .figuretwo {
		line-height: 2;
		margin-top: 1rem;
	}
	
	#heartbeatme .figuretwo p:nth-of-type(1) {
		font-size: 1.07rem;
	}
	
	#heartbeatme .figuretwo p:nth-of-type(1) span:nth-of-type(2) {
		margin-left: 1.2rem;
		color: #B674FD;
	}
	
	#heartbeatme .figuretwo p:nth-of-type(2) {
		font-size: 1rem;
		color: #666666;
	}
	
	#heartbeatme .figurethree button {
		width: 4.86rem;
		height: 2.57rem;
		background: #B674FD;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.30);
		border-radius: 3px;
		color: white;
	}
	
	#heartbeatme .main .active {
		color: #B674FD;
		background: white;
	}
	
	#heartbeatme .select span {
		position: relative;
	}
	
	#heartbeatme .txt {
		width: 80%;
		position: absolute;
		bottom: -2rem;
		left: -1rem;
		padding: .3rem .5rem;
		display: flex;
		justify-content: space-around;
		font-size: 1rem;
		background: #FFFFFF;
		border: 1px solid #EEEEEE;
		box-shadow: 0 2px 4px 0 #EEEEEE;
		border-radius: 3px 0 0 0 3px 3px 3px;
		z-index: 999;
	}
	
	#heartbeatme .txtt {
		width: 130%;
		position: absolute;
		bottom: -2rem;
		left: -3rem;
		padding: .3rem .5rem;
		display: flex;
		justify-content: space-around;
		font-size: 1rem;
		background: #FFFFFF;
		border: 1px solid #EEEEEE;
		box-shadow: 0 2px 4px 0 #EEEEEE;
		border-radius: 3px 0 0 0 3px 3px 3px;
		z-index: 999;
	}
	
	#heartbeatme .txt>span:hover {
		color: #B674FD;
	}
	
	#heartbeatme time img {
		width: 1.5rem;
		height: 0.7rem;
	}
</style>