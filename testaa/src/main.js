// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' //引入路由
import HelloWorld from './components/HelloWorld' //引入HelloWorld组件
import Home from './components/Home' //Home
import Footer from './components/Footer'
import Count from './components/Count'

Vue.config.productionTip = false
Vue.use(VueRouter)//使用路由

const others = {
	template: '<div>user: {{$route.params.id}}</div>' 
}
const others2 = {
	template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
     </div>
    `
}
const name1 = {
	template: '<div>user: name1</div>' 
}
const name2 = {
	template: '<div>user: name2</div>'
}
const userHome = {
	template: '<div>user: userHome</div>' 
}
const newUser = {
	template: '<div>user: newUser</div>' 
}
const compD = {
	template: '<div>我是默认的router-view</div>' 
}
const compA = {
	template: '<div>我是compA的router-view</div>' 
}
const compB = {
	template: '<div>我是compB的router-view</div>' 
}

//配置路由
const vuerouter = new VueRouter({
	routes:[
		{
			path:"/", component:Home
		},
		{
			path:"/hello", component:HelloWorld
		},
		{
			path:"/Footer",component:Footer
		},
		{
			path:"/others/:id",component: others  //动态路由匹配
		},
		{
			path:"/others/:userName",component: others2,
			children:[
				{
					path:"name1" ,  //以 / 开头的嵌套路径会被当作根路径
					component: name1
				},
				{
					path:"name2",
					component: name2
				},
				{
					path:"", //这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由
					component: userHome
				}
			]
		},
		{
			path:"/comps",
			components:{
				default: compD,
				a: compA,
				b: compB
			}
		},
		{
			path:"/count",component:Count
		},
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
