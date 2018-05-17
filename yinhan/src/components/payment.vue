<template>
	<div id="payment">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>我的记录</font>
			</div>
		</div>-->
		<div class="main">
			<button @click="index=0,bol=true" :class="index==0?'active':''">待支付</button>
			<button @click="index=1,bol=false" :class="index==1?'active':''">已完成</button>
		</div>
		<div class="container" v-show="bol">
			<ul>
				<li>
					<span style="color: #999999;">商品名称：</span>
					<span style="margin-left: 0.7rem;color: #333333;">一级会员3个月</span>
				</li>
				<li>
					<span style="color: #999999;">下单时间：</span>
					<span style="margin-left: 0.7rem;color: #333333;">2018-03-21</span>
				</li>
				<li>
					<span style="color: #999999;">订单编号：</span>
					<span style="margin-left: 0.7rem;color: #333333;">AEB88985223</span>
				</li>
				<li>
					<span style="color: #999999;">订单金额：</span>
					<span style="margin-left: 0.7rem;color: #FF265C;">￥199</span>
				</li>
				<li style="border-bottom: 1px solid #F5F5F5;">
					<span style="color: #999999;">订单状态：</span>
					<span style="margin-left: 0.7rem;color: #333333;">待支付</span>
				</li>
				<li class="choose">
					<button>取消订单</button>
					<button>确认订单</button>
				</li>
			</ul>
		</div>
		<div class="container" v-show="!bol">
			<ul>
				<li>
					<span style="color: #999999;">商品名称：</span>
					<span style="margin-left: 0.7rem;color: #333333;">一级会员3个月</span>
				</li>
				<li>
					<span style="color: #999999;">下单时间：</span>
					<span style="margin-left: 0.7rem;color: #333333;">2018-03-21</span>
				</li>
				<li>
					<span style="color: #999999;">订单编号：</span>
					<span style="margin-left: 0.7rem;color: #333333;">AEB88985223</span>
				</li>
				<li>
					<span style="color: #999999;">订单金额：</span>
					<span style="margin-left: 0.7rem;color: #FF265C;">￥199</span>
				</li>
				<li>
					<span style="color: #999999;">订单状态：</span>
					<span style="margin-left: 0.7rem;color: #333333;">已完成</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "payment",
		data() {
			return {
				bol: false,
				index: 1
			}
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			}
		}
	}
</script>

<style>
	#payment .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#payment .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#payment .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#payment .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#payment .main {
		padding: 0.2rem;
		width: 94.8%;
		margin: 0 auto;
		margin-top: 1rem;
		background: #F3F3F3;
		border-radius: 3px;
		display: flex;
		justify-content: space-between;
	}
	
	#payment .main button {
		width: 49.5%;
		padding: 0.8rem 0;
		/*background: #FFFFFF;*/
		border-radius: 3px;
		font-size: 1.14rem;
		color: #c1c1c1;
		letter-spacing: 0;
	}
	
	#payment .container {
		width: 94.7%;
		margin: 1rem auto;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#payment .container ul {
		padding: 1rem 0.7rem;
	}
	
	#payment .container ul li {
		line-height: 2;
		font-size: 1.07rem;
	}
	
	#payment .main .active {
		background: white;
		color: #B674FD;
	}
	
	#payment .choose {
		display: flex;
		justify-content: space-around;
		margin-top: 1rem;
	}
	
	#payment .choose button {
		padding: 0.7rem 2.5rem;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.39);
		border-radius: 3px;
		background: #B674FD;
		color: #FFFFFF;
	}
	
	#payment .choose button:nth-of-type(1) {
		color: #c1c1c1;
		background: #F3F3F3;
	}
</style>