<template>
  <div class="footer" >
  	<h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      title: "this is the footer of demo"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer{
		padding: 10px;
		text-align: center;
		color: white;
		background-color: #000;
	}
</style>
