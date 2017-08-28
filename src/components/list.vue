<template>
  <div id="demo">
    
    <li v-for="item in list" :key="item.id" >
    {{item.id}}:<comp :message='item.message' :my-size='item.size'  @updata='updatedata'></comp>
    </li>
          <button @click='update'>添加数据</button>
     <button @click='deletedata'>删除数据</button>
</div>
</template>
<script>
import comp from "./comp"
export default {
  name: 'list',
  comments: [comp],
  methods: {

  
    updatedata:function(data){
      
     this.list.push(data)
    },



    update: function(){
        var dataitem={
           id:1,
         message:"hello",size:5
        }
          this.list.push(dataitem)  
    },
      deletedata: function(){
         this.list.pop();
    },

  },
  // props: ['list'],
  data() {
    return {
     

        item:{
          id:1,
         message:"hello",
         size:1
      },
       list:[{
         id:1,
         message:"hello",
         size:1
       },{
         id:2,
         message:"world",
         size:155
       }
       ]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  >

</style>
