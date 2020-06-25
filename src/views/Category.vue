<template>
   <div class="container my-3">
      <div class="row" v-if="posts">
      <div class="col-12" v-for="post in posts" :key="post.id">
        <Post :post="post"/>
      </div>
    </div>
   </div>
</template>
<script>
import {onMounted, ref} from '@vue/composition-api'
import Post from '../components/post'
export default {
  components:{
    Post
  },
  setup(props,{root:{$store,$route}}){
    
    const posts = ref(null);
    onMounted(async () => {
      const categoryName = $route.params.name;
      
      posts.value = await $store.dispatch('postsModule/getByCategory',categoryName);
    });
    return {posts}
  }
}
</script>