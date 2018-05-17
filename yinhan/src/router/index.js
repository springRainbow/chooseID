import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import options from '@/components/options'
import login from '@/components/login'
import account from '@/components/account'
import me from '@/components/me'
import mine from '@/components/mine'
import Encounter from '@/components/Encounter'
import DetailPage from '@/components/DetailPage'
import meinterest from '@/components/meinterest'
import interestme from '@/components/interestme'
import agreement from '@/components/agreement'
import Album from '@/components/Album'
import meheartbeat from '@/components/meheartbeat'
import heartbeatme from '@/components/heartbeatme'
import payment from '@/components/payment'
import Info from '@/components/Info'
import record from '@/components/record'
import advices from '@/components/advices'
import eachOther from '@/components/eachOther'

Vue.use(Router)

export default new Router({
	//消除路由中的#号
	//	mode: "history",
	routes: [{
		//主页
		path: '/',
		name: 'home',
		component: home
	}, {
		//详情
		path: '/options',
		name: 'options',
		component: options
	}, {
		//登录
		path: '/login',
		name: 'login',
		component: login
	}, {
		//账号管理
		path: '/account',
		name: 'account',
		component: account
	}, {
		//账号管理
		path: '/me',
		name: 'me',
		component: me
	}, {
		//我的
		path: '/mine',
		name: 'mine',
		component: mine
	}, {
		//邂逅
		path: '/Encounter',
		name: 'Encounter',
		component: Encounter
	}, {
		//邂逅详情
		path: '/DetailPage/:id',
		name: 'DetailPage',
		component: DetailPage
	}, {
		//我的关注
		path: '/meinterest',
		name: 'meinterest',
		component: meinterest
	}, {
		//关注我的
		path: '/interestme',
		name: 'interestme',
		component: interestme
	}, {
		//注册协议
		path: '/agreement',
		name: 'agreement',
		component: agreement
	}, {
		//我的相册
		path: '/Album',
		name: 'Album',
		component: Album
	}, {
		//我心动的
		path: '/meheartbeat',
		name: 'meheartbeat',
		component: meheartbeat
	}, {
		//对我心动
		path: '/heartbeatme',
		name: 'heartbeatme',
		component: heartbeatme
	}, {
		//支付记录
		path: '/payment',
		name: 'payment',
		component: payment
	}, {
		//完善信息
		path: '/Info',
		name: 'Info',
		component: Info
	}, {
		//邂逅记录
		path: '/record',
		name: 'record',
		component: record
	}, {
		//对方向你打了招呼
		path: '/advices',
		name: 'advices',
		component: advices
	}, {
		//彼此心动
		path: '/eachOther',
		name: 'eachOther',
		component: eachOther
	}]
})