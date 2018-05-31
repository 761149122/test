// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' //引入路由
import HelloWorld from './components/HelloWorld' //引入HelloWorld组件
import Home from './components/Home' //Home

Vue.config.productionTip = false
Vue.use(VueRouter)//使用路由

//配置路由
const vuerouter = new VueRouter({
	routes:[
		{
			path:"/", component:Home
		},
		{
			path:"/hello", component:HelloWorld
		}
	],
	mode:"history" //去掉链接上的#
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: vuerouter, //使用自定义路由器命名时，要写全
  components: { App },
  template: '<App/>'
})
