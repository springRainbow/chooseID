<template>
	<div id="app">
		<footer>
			<div class="footerone" v-for="item in arr" @click="fn(item.title,item.index)">
				<router-link :to="item.name">
					<div class="base">
						<img :src="currentName==item.title?item.new:item.old" />
					</div>
					<span :class="currentName==item.title?'active':'font'">
						{{item.title}}
					</span>
				</router-link>
			</div>
		</footer>
		<router-view></router-view>
	</div>
</template>

<script>
	import ahome from '.././static/img/a-home.png'
	import shome from '.././static/img/s-home.png'
	import aEncounter from '.././static/img/a-Encounter.png'
	import sEncounter from '.././static/img/s-Encounter.png'
	import amine from '.././static/img/a-mine.png'
	import smine from '.././static/img/s-mine.png'
	export default {
		name: 'App',
		data() {
			return {
				arr: [{
					name: "/",
					old: ahome,
					new: shome,
					title: "交友"
				}, {
					name: "/Encounter",
					old: aEncounter,
					new: sEncounter,
					title: "邂逅"
				}, {
					name: "/mine",
					old: amine,
					new: smine,
					title: "我的",
					index: 3
				}],
				currentName: "交友"
			}
		},
		methods: {
			fn(name, index) {
				this.currentName = name
				sessionStorage.setItem('currentName', this.currentName)
				if(index == 3) {
					if(sessionStorage.phone == undefined) {
						this.$router.push({
							path: "/login"
						})
					} else {
						this.$router.push({
							path: "/mine"
						})
					}
				}
			}
		},
		mounted() {
			this.currentName = sessionStorage.getItem('currentName')
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		border: none;
		outline: none;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	}
	
	#app footer {
		width: 100%;
		position: fixed;
		z-index: 99;
		bottom: 0;
		height: 3.5rem;
		box-shadow: 0 -2px 9px 0 rgba(0, 0, 0, 0.1);
		background: white;
		display: flex;
		justify-content: space-around;
		font-size: 1rem;
		overflow: hidden;
	}
	
	#app footer img {
		margin: auto;
	}
	
	#app .footerone {
		display: flex;
		flex-direction: column;
	}
	
	#app .base {
		margin: 0 auto;
		margin-top: 0.5rem;
		width: 1.73rem;
		height: 1.66rem;
	}
	
	#app .base img {
		margin: auto;
		width: 100%;
		max-width: 100%;
	}
	
	#app .footerone span {
		text-align: center;
		margin-top: 0.1rem;
		/*color: #999999;*/
	}
	
	#app .font {
		color: #999999;
	}
	
	#app .active {
		color: #B674FD;
	}
</style>