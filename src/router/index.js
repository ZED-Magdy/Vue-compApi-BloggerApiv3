import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import ShowPost from '../views/ShowPost.vue'
import Search from '../views/Search.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: Category
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: ShowPost
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
