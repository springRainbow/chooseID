<template>
	<div id="advices">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>这里是名字</font>
			</div>
		</div>-->
		<div class="main">
			<div class="top">
				有人向您打了招呼
			</div>
			<div class="content">
				<img src="../../static/img/18.png" />
				<div class="content_item">
					<p>HDSISIS</p>
					<p><span>46岁</span><span>170cm</span></p>
				</div>
				<p style="font-size: 0.93rem;color: #666666;line-height: 2.2;">北京海淀</p>
			</div>
			<div class="bottom_item">
				<p>丹丹对您比较中意，送您一只玫瑰花！</p>
				<p>您是否回应对方</p>
				<div class="btn">
					<button>取消</button>
					<button>同意</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "advices",
		data() {
			return {

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
	#advices .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#advices .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#advices .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#advices .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#advices .main {
		width: 79.8%;
		margin: 0 auto;
		margin-top: 3rem;
		/*padding: 5rem 0;*/
		background: #FFFFFF;
		box-shadow: 0 2px 4px 1px rgba(182, 116, 253, 0.20);
		border-radius: 3px;
	}
	
	#advices .top {
		width: 100%;
		text-align: center;
		padding: 1rem 0;
		font-size: 1.14rem;
		color: #333333;
	}
	
	#advices .content {
		display: flex;
		justify-content: space-around;
		box-shadow: 0 2px 3px 3px #F7F7F7;
		border-radius: 3px;
		padding: 0.8rem 0;
	}
	
	#advices .content_item {
		display: flex;
		flex-direction: column;
		line-height: 2.2;
		margin-left: -1.5rem;
	}
	
	#advices .content_item p:nth-of-type(1) {
		font-size: 1.07rem;
	}
	
	#advices .content_item p:nth-of-type(2) {
		font-size: 1.07rem;
		color: #B674FD;
		letter-spacing: 0;
	}
	
	#advices .content_item p:nth-of-type(2) span:nth-of-type(2) {
		padding: 0 0.2rem;
		border: 1px solid #B674FD;
		border-radius: 3px;
		margin-left: 0.7rem;
	}
	
	#advices .bottom_item {
		width: 100%;
		text-align: center;
		font-size: 1rem;
		color: #333333;
		padding: 1.3rem 0 2rem 0;
	}
	
	#advices .btn {
		display: flex;
		justify-content: space-around;
		width: 100%;
		margin-top: 1.2rem;
	}
	
	#advices .btn button:nth-of-type(1) {
		background: #FFFFFF;
		border: 1px solid #999999;
		color: #999999;
	}
	
	#advices .btn button:nth-of-type(2) {
		border: 1px solid #B674FD;
		background: #FFFFFF;
		box-shadow: 0 2px 4px 0 rgba(182, 116, 253, 0.30);
		color: #B674FD;
	}
	
	#advices .btn button {
		font-size: 1.07rem;
		border-radius: 3px;
		padding: 0.6rem 1.5rem;
	}
</style>