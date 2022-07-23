<template>
  <div id="app">
    <cdHeader />
    <router-view />
    <cdFooter />
  </div>
</template>

<script>
import cdHeader from './components/cdHeader.vue'
import cdFooter from './components/cdFooter.vue'

export default {
  name: 'App',
  components: {
    cdHeader,
    cdFooter,
  }
}
</script>

<style>
@import "./assets/css/style.css";
</style>
