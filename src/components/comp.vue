<template>

    <span>{{message}}{{mySize}}<button @click='adddata'>添加数据</button></span>
    
</template>
<script>

export default {
  name: 'comp',
   props:['message','mySize'],
   methods:{
      adddata() {
     
      var item= {
          id: 1,
        message: "hello"
      }
      bus.$emit('updata',item);
     },
   
   },
  data () {
   
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang='less'>

div{
  display: inline-block;
  span{
    text-align:center;
    color:red
  }

}
  

</style>
