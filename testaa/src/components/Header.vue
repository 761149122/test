<template>
  <div class="header" v-on:click="changTitle">
  	<h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: "this is the header of demo"
    }
  },
  methods:{
  	changTitle:function(){
  		//this.title = "eeeee";
  		this.$emit("titleChanged","子向父组件传值")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		padding: 10px;
		text-align: center;
		color: red;
		background-color: #cccccc;
	}
</style>
