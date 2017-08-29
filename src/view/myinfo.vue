<template>
  <div class="index">
    <h1 class="m-h1" >登录信息显示：{{realname}},{{token}}</h1>



  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'myinfo',
  created(){

var obj = { "name":"Runoob", "alexa":function () {return 10000;}, "site":"www.runoob.com"};
var obj2 = JSON.stringify(obj,function(key,value){
  if(key=='name'){return 'zhangbing'}
  if(typeof(value)=='function'){
       return value.toString()
  }
  else{
    return value
  }
})
console.log(obj2)
console.log(JSON.parse(obj2))
  },
  methods:{



  },
  computed:mapState({
     realname:state=>state.loginname,
     token:state=>state.token
  })
  ,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
.m-h1{
line-height:40px;
font-weight:bold;
font-size:20px;
text-align:center;
line-height: 50px;
 

}
</style>
