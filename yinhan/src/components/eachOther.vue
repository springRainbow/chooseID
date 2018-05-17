<template>
	<div id="eachOther">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>彼此心动</font>
			</div>
		</div>-->
		<div class="main">
			<div class="mainitem">
				<img src="../../static/img/symbols-心动.png" />
			</div>
			<p>
				恭喜相互心动
			</p>
		</div>
		<div class="container">
			<div class="containertop">
				<p>恭喜相互心动</p>
				<p>希望你二人本着真心，真诚，真情的宗旨善待对方。</p>
				<p>在人生的下半程开始一段浪漫温馨的爱情！</p>
				<p>祝愿二位早日传来喜讯！</p>
			</div>
			<div class="containerbottom">
				<img src="../../static/img/15.png" />
				<span><img src="../../static/img/symbols-动心2.png" /></span>
				<img src="../../static/img/15.png" />
			</div>
			<div style="color: #B674FD;font-size: 1.2rem;">联系方式：12345678</div>
		</div>
		<div class="mainbottom">
			<p>你们彼此留下了联系方式，别让缘分就</p>
			<p>这样溜走哟！</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "eachOther",
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
	#eachOther .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#eachOther .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#eachOther .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#eachOther .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#eachOther .main {
		padding: 3rem 0;
		width: 94.7%;
		margin: 2rem auto;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
		text-align: center;
	}
	
	#eachOther .main .mainitem {
		width: 7.5rem;
		height: 7.5rem;
		margin: 0 auto;
	}
	
	#eachOther .main .mainitem img {
		width: 100%;
	}
	
	#eachOther .main p {
		font-size: 1.3rem;
		color: #000000;
		letter-spacing: 0;
	}
	
	#eachOther .container {
		width: 94.7%;
		margin: 2rem auto;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
		text-align: center;
		color: #666666;
		font-size: 1.1rem;
		padding: 1rem 0 2rem 0;
	}
	
	#eachOther .container div {
		margin-top: 1rem;
	}
	
	#eachOther .containerbottom {
		display: flex;
		margin: auto;
		width: 60%;
		justify-content: space-around;
	}
	
	#eachOther .containerbottom span {
		display: block;
		margin: auto;
		width: 3rem;
		height: 3rem;
	}
	
	#eachOther .containerbottom span img {
		width: 100%;
	}
	
	#eachOther .mainbottom {
		color: #666666;
		letter-spacing: 0;
		font-size: 1rem;
		text-align: center;
		line-height: 1.7;
	}
</style>