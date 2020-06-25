<template>
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="image" class="card-img" style="max-height:200px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <router-link class="card-title" :to="'/posts/'+post.id">{{post.title}}</router-link>
        <p class="card-text"><small class="text-muted">{{post.updated}}</small></p>
        <b><small>{{post.labels[0]}}</small></b>
      </div>
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
        props: ['post'],
        setup({post}) {
            let image = ref(null);
            var stringToHTML = function (str) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(str, 'text/html');
                return doc.body;
            };

            onMounted(() => {
                const html = stringToHTML(post.content);
                if (html.getElementsByTagName('img').length) {
                    image.value = html.getElementsByTagName('img')[0].src;
                } else {
                    image.value = "https://luminostechnology.com/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default.jpg" // default image url
                }
            });
            return {image}
        }
    }
</script>