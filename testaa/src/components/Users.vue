<template>
  <div class="users">
  	<ul>
  		<li v-for="user in users">
  			{{user}}
  		</li>
  	</ul>
 		
  </div>
</template>

<script>
export default {
  name: 'Users',
  props:["users"],//获取自定义的名字,props父向子传值
// props:{//严谨写法
// 	users:{
// 		type:Array,
// 		required:true
// 	},
// 	ages:{
// 		type: Array,
// 		required: true
// 	}
// },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.users{
		width: 1200px;
		margin: 0 auto;
		font-size: 25px;
	}
h1, h2 {
	font-size: 26px;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
