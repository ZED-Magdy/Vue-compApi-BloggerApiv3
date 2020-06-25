<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="blog">
        <div class="container">
            <a class="navbar-brand" href="#">{{blog.name}}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-for="category in categories" :key="category.title">
                    <router-link class="nav-link" :to="'/category/'+category.title">{{category.title}}</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" @submit.prevent="search">
                <input class="form-control mr-sm-2" required type="search" v-model="searchQuery" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
</template>
<script>
    import {
        onMounted,
        ref
    } from '@vue/composition-api'
    export default {
        setup(props, {root: {$store, $router}}) {

            let blog = ref(null);
            let categories = ref(null);
            onMounted(async () => {
                await $store.dispatch('infoModule/getInfo');
                blog.value = $store.getters['infoModule/info'];

                await $store.dispatch('infoModule/getCategories');
                categories.value = $store.getters['infoModule/categories'];
            });

            let searchQuery = ref('');
            function search(){
                $router.push('/search/'+searchQuery.value);
            }

            return {
                blog,
                categories,
                searchQuery,
                search
            }
        }
    }
</script>