<template>
  <div id="app">
  	<ul>
  		<li>
  			<router-link to="/">Home</router-link>
  		</li>
  		<li>
  			<router-link to="/hello">Hello</router-link> <!--to组件名-->
  		</li>
  	</ul>
    <router-view></router-view><!--显示home里面的html-->
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
</style>
