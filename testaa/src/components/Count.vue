<template>
    <div>
        <h3>{{msg}}</h3>
        <h3>
        	{{$store.state.count}}
        </h3> 
        <!--<h3>
        	--将$store.state.count的值变成{{count}}，使用computed的方法
        </h3>  -->
        <!--<h3>
        	mapState方法{{count}}
        </h3>-->
        <h3>
        	mapState方法数组方式{{count}}
        </h3>
        <button @click="$store.commit('add',10)">++</button>
        <button @click="reduce">--</button>
    </div>
</template>

<script>
    import store from '@/vuex/store' //@表示src这个目录下
    import {mapState,mapMutations} from 'vuex'
    export default {
        name:"Count",
        data(){
            return {
                 msg : "hello vuex"
            }
        },
//     	 方法一:
//      computed:{
//      	count(){ //{{count}}方法后面不加（）
//      		return this.$store.state.count;
//      	}
//      	
//      },

//		方法二:
//		computed:mapState({
//  		count:state=>state.count
//      }),

//		computed:mapState({
//  		count:function(state){
//				return state.count;
//			}
//      }),

//		方法三
		computed:mapState(['count']),
		methods:mapMutations(['add','reduce']),
        store
        
    }
</script>
