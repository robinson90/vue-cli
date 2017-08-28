<template>
  <div class="index">
    <h1 class="m-h1" >{{msg}} ,我的页面</h1>
  </div>
</template>

<script>
export default {
  name: 'myinfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
