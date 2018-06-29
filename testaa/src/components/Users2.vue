<template>
  <div class="users2">
  	<form v-on:submit="addUser">
  		<input type="text" placeholder="input you name" key="name" v-model="newUser.name" />
  		<input type="text" placeholder="input you email" key="email"  v-model="newUser.email" />
  		<input type="submit" value="submit" />
  	</form>
  	<ul>
  		<li v-for="users in users">
  			{{users.name}}-{{users.email}}
  		</li>
  	</ul>
 		
  </div>
</template>

<script>
export default {
  name: 'Users2',
  data () {
    return {
    	newUser:{},
     users:[
     	{
     		name: "user1",
     		email: "user1@qq.com",
     		contacted:false
     	},
     	{
     		name: "user2",
     		email: "user2@qq.com",
     		contacted:false
     	},
     	{
     		name: "user3",
     		email: "user3@qq.com",
     		contacted:false
     	}
     ]
    }
  },
  methods:{
  	addUser:function(e){
  		e.preventDefault();
			this.users.push({
				name: this.newUser.name,
				email: this.newUser.email,
				contacted:false
			});
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.users2{
		width: 1200px;
		margin: 20px auto;
		font-size: 25px;
	}

</style>
