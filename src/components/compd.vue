<template>

    <span>{{message}}{{mySize}}</span>
    
</template>
<script>

export default {
  name: 'compd',
      mounted(){
        bus.$on('updata', (data) => {
            console.log(data)
        })
    },
   props:['message','mySize'],
   methods:{
      adddata() {
     
      var item= {
          id: 1,
        message: "hello"
      }
      this.$emit('updata',item);
     },
     changedata() {

      //  that.message='ascf'

     }
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
