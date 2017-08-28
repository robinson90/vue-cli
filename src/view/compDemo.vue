<template>
  <div >
    <h2>示例组件view</h2>
    <comp :message='item.message' :my-size='item.size' ></comp>
    <compd :message='item.message' :my-size='item.size' ></compd>
</div>
</template>
<script>
  
export default {
 
  name: 'compDemo',
 methods:{
 updatedata:function(data){
      
     this.list.push(data)
    },
 },
  data () {
    return {
      willshow:false,

      selected:'',
      item:{
          id:1,
         message:"hello",
         size:1
      },
      
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