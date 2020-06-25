<template>
  <div class="container my-3">
    <div class="row" v-if="posts">
      <div class="col-12" v-for="post in posts" :key="post.id">
        <Post :post="post"/>
      </div>
    </div>
    <div v-else>
    <h3 v-if="!loading">There's no posts, yet</h3>
    </div>
    <h2 v-if="loading">Loading ....</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref, onMounted} from '@vue/composition-api'
import {API_KEY} from '../config'
import Post from '../components/post'
export default {
  components:{
    Post
  },
  setup(props,{root : {$store}}){
    let loading = ref(false);
    let posts = ref(null);
    onMounted(async () => {
        loading.value = true;
        await $store.dispatch('postsModule/getAll');
        posts.value = $store.getters['postsModule/posts'];
        loading.value = false;
        
    });
    return {posts,loading}
  }
}
</script>