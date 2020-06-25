<template>
  <div id="app">
      <navbar></navbar>
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
  </div>
</template>
<script>
import navbar from './components/navbar'
export default {
  components:{
    navbar
  }
}
</script>
