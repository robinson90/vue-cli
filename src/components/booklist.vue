<template>
  <div>
     <h2>书单列表</h2>
  <ul class="m-booklist">
   
    <li v-for="book in booklist" :key="book.id">
      <router-link :to="'/bookDetail/' +book.id" > {{book.id}}{{book.pubdate}}</router-link>
    </li>
  </ul>
  </div>
</template>

<script>
 import booklist from '../data/booklist.json'
export default {
  name: 'booklist',
  data () {
    return {
      booklist: booklist.books
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">


.m-booklist{
  overflow: hidden;
  width: 200px;
  padding:15px 20px;
  margin: 0 auto;
   li{
  height: 40px;
  line-height: 40;
  color:green;
    border-bottom:1px solid gray;

    a{
  display: block;
  line-height: 39px;
  text-decoration: none;
  };
  };
}
 
</style>
