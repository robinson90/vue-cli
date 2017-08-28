<template>
  <div class="index">
    <h1 class="m-h1">基本应用实践</h1>
    <router-link :to="'/booklist'" >书籍列表</router-link>
    <router-link :to="'/login'" >vuex实践</router-link>
    <router-link :to="'/vuex1'" >vuex实践1</router-link>
    <router-link :to="'/compDemo'" >components组件实践</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.m-h1{
line-height:40px;
font-weight:bold;
font-size:20px;
text-align:center;
}


.index a {
  display: block;
  text-align: center;
  text-decoration: none;
  line-height: 25px;
}
</style>
