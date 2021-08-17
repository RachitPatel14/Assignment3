<template>
<div class="container">
  <h1>Latest Posts</h1>

  <hr>
  <p class="error" v-if="error">{{ error }} </p>
  <div class="posts-container">
    <div class="post"
    v-for="(post, index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    >
    <div style="background-color: blue; margin:10px 100px">
    <p class="name"> {{ 'Name: '+post.name }} </p>
    <p class="brand_name"> {{ 'Brand Name: ' + post.brand_name }} </p>
    <p class="color"> {{ 'Color: ' +post.color }} </p>
    <p class="price"> {{ ' Price: ' +post.price }} </p>
    <p class="type"> {{ ' Type: ' +post.type }} </p>
    </div>

    </div>
  </div>
</div>
</template>

<script>
import Violin from '../Violin';
export default {
  name: 'ViolinComponent',
  data() {
    return {
      posts: [],
      error: '',
      name: '',
      brand_name: '',
      color: '',
      price: '',
      type: '',
}
},
async created() {
  try {
    
    this.posts = await Violin.getPosts();
  } catch (err) {
    this.error = err.message;
  }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
