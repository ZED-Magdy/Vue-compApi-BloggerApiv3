<template>
    <div class="container my-3">
    <div class="row" v-if="posts">
      <div class="col-12" v-for="post in posts" :key="post.id">
        <Post :post="post"/>
      </div>
    </div>
    <div v-else>
    <h3 v-if="!loading">Your search doesnt match any records !</h3>
    </div>
    <h2 v-if="loading">Loading ....</h2>
  </div>
</template>
<script>
import {onMounted, ref} from '@vue/composition-api'
import Post from '../components/post'
export default {
    components:{
        Post
    },
    setup(props,{ root: { $store, $route } }){
        console.log($route.params.query);
        
        const posts = ref(null);
        let loading = ref(false);
        onMounted(async () => {
            loading.value = true;
            posts.value = await $store.dispatch('postsModule/getFromSearch',$route.params.query);
            loading.value = false;
        });
        return { posts, loading }
    }
}
</script>