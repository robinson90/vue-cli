<template>
  <div class="m-bookDetail">
    <h2>book详情</h2>
     <ul>
      <li>info:{{book.updated}}</li>
      <li>info:{{book.user_id}}</li>
      <li>info:{{book.id}}</li>
      <li>info:more</li>


     </ul>
  </ul>
</div>
</template>
<script>
 import book from '../data/book.json'

export default {
  name: 'bookDetail',
 
  data () {
     var id=this.$route.params.id;
    return {
      book: book
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  less>
  *{
    margin:0px ;
    padding:0;
    border: none;
  }
  li{
    list-style: none;
    line-height: 40px;
    height: 40px;

  }

</style>
