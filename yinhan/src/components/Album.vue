<template>
	<div id="Album">
		<!--<div class="head">
			<div class="bottom">
				<a href="javascript:" @click="getOn"></a>
				<font>我的相册</font>
			</div>
		</div>-->
		<div class="main">
			<div class="mainitem">
				<div class="mainone" v-for="(image,index) in getAlbumData">
					<img :src="image.img_url" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Album",
		data() {
			return {
				getAlbumData: '', //数据保存
				tokenNew: ''
			}
		},
		mounted() {
			this.tokenNew = sessionStorage.getItem("Token")
			this.getAlbum()
		},
		methods: {
			getOn() {
				this.$router.go("-1")
			},
			//获取相册数据
			getAlbum() {
				var _this = this
				this.$http({
					method: "get",
					url: "http://yinhan-media.weiyingjia.org/api/yinhan/memberalbums",
					params: {},
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + this.tokenNew
					}
				}).then(res => {
					this.getAlbumData = res.data.data
					console.log(this.getAlbumData[0].img_url)
				}).catch(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	#Album .head {
		width: 100%;
		padding-bottom: 0.1rem;
		box-shadow: 0 2px 4px 0 #F7F7F7;
	}
	
	#Album .bottom {
		font-size: 1.15rem;
		color: #333333;
		letter-spacing: 0;
		margin-bottom: 0.5rem;
	}
	
	#Album .bottom a {
		background: url(../../static/img/retreat.png) 1rem 0.5rem no-repeat;
		padding: 0.3rem 1.2rem;
		background-size: 0.8rem;
	}
	
	#Album .bottom font {
		display: inline-block;
		padding: 0.45rem 0;
	}
	
	#Album .main {
		width: 90%;
		margin: 0 auto;
	}
	
	#Album .mainitem {
		margin-top: 1.3rem;
		display: flex;
		justify-content: space-between;
		flex-wrap:wrap;
	}
	#Album .mainitem .mainone {
		width:30%;
	}
</style>