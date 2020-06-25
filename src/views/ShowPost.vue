<template>
    <div class="container" v-if="post">
        <h1>{{post.title}}</h1>
        <b><small>{{post.updated}} - {{post.labels[0]}}</small></b>
        <div v-html="post.content"></div>
        <div class="media border p-3">
            <img :src="post.author.image.url" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
            <div class="media-body">
                <h4>{{post.author.displayName}}</h4>
                <p>Posted on {{post.updated}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        ref,
        onMounted
    } from '@vue/composition-api'
    export default {
        setup(props, {
            root: {
                $store,
                $route
            }
        }) {
            const post = ref(null);

            onMounted(async () => {
                post.value = await $store.dispatch('postsModule/getById', $route.params.id);
            });

            return {
                post
            }
        }
    }
</script>