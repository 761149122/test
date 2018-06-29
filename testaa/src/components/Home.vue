<template>
  <div id="home">
    <app-head v-on:titleChanged="updateTitle($event)" ></app-head>
    <h1>{{title}}</h1>
    <users v-bind:users="users"></users><!--第一个users自定义 v-bind:users="users"-->
    <users ></users>
    <users2></users2>
    <foot></foot>
  </div>
</template>

<script>
import Users from './Users'
import Users2 from './Users2'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  data(){
  	return{
  		title: "这是我的第一个cli脚手架项目",
		users:["aa","bb","cc"]

  	}
  },
  methods:{
  	updateTitle(title){
  		this.title = "这个是子向父组件传值";
  	}
  },
  components:{
  	"users":Users,
  	"users2":Users2,
  	"app-head":Header,
  	"foot":Footer
  }
}
</script>

<style>
h1{
	font-size: 26px;
	color: #42B983;
	text-align: center;
}
</style>
