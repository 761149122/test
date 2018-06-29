<template>
  <div id="app">
  	<ul class="nav-ul">
  		<li>
  			<router-link to="/">Home</router-link>
  		</li>
  		<li>
  			<router-link to="/hello">Hello</router-link> <!--to组件名-->
  		</li>
  		<li>
  			<router-link to="/footer">Footer</router-link>
  		</li>
  		<li>
  			<router-link to="/others/user1">Others1</router-link>
  		</li>
  		<li>
  			<router-link to="/others/user2">Others2</router-link>
  		</li>
  		<li>
  			<router-link to="/others/user3">Others3</router-link>
  		</li>
  		<li>
  			<router-link to="/others/userName/">userName</router-link>
  		</li>
  		<li>
  			<router-link to="/others/userName/name1">name1</router-link>
  		</li>
  		<li>
  			<router-link to="/others/userName/name2">name2</router-link>
  		</li>
		<li>
			<router-link to="/comps">多个视图多个组件</router-link>
		</li>
		<li>
			<router-link to="/count">计时器(vuex)</router-link>
		</li>
  	</ul>
    <router-view></router-view><!--显示home里面的html-->
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
h1{
	font-size: 26px;
	color: #42B983;
	text-align: center;
}
.nav-ul li{
	float: left;
	list-style: none;
	margin-right: 15px;
}

.nav-ul{
	padding: 20px 10px;
	margin: 20px 0;
}
</style>
