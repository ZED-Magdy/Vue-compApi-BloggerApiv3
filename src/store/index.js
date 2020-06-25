import Vue from 'vue'
import Vuex from 'vuex'
import infoModule from './info'
import postsModule from './posts'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    infoModule,
    postsModule
  }
})
