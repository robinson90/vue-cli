<template>
  <div >
    <h2>登录组件</h2>
    <button @click="login">登录</button><button @click="loginout">退出</button>
    hello{{realname}}
</div>
</template>
<script>

export default {
 
  name: 'login',
 methods:{
 login:function(){
      let loginmsg={
        loginname:'张三',
        token:"35s4dscfssevserfv"
      }
      this.realname=loginmsg.loginname
      this.$store.commit('loginIn',loginmsg)
    },
 loginout:function(){   
      this.$store.commit('loginOut')
      this.realname=this.$store.state.loginname
   
 } ,  
 },
  data () {
    return {
      realname:this.$store.state.loginname,
     

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
 .container{
   background: red;
   padding:50px;
 
 }
 .container  .main {
   width: 50px;
   height: 50px;
    background: #000; 
    }
</style>