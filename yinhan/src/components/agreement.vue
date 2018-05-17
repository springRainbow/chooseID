<template>
	<div id="agreement">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>注册协议</font>
			</div>
		</div>-->
		<div class="main">
			<div class="mainitem">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "agreement",
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
	#agreement .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#agreement .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#agreement .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#agreement .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#agreement .main {
		width: 94.7%;
		margin: 0 auto;
		margin-top: 1rem;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 #EEEEEE;
		border-radius: 3px;
	}
	
	#agreement .mainitem {
		width: 90.7%;
		margin: 0 auto;
		padding: 1rem 0;
		font-size: 1.14rem;
		color: #333333;
		letter-spacing: 0;
		line-height: 1.8rem;
	}
</style>