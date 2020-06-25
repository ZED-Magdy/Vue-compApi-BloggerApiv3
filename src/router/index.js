import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: () => import(/* webpackChunkName: "showpost" */ '../views/ShowPost.vue')
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
