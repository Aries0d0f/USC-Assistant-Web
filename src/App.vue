<template>
  <div id="app">
    <navbar/>
    <main-menu/>
    <router-view/>
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  components: layout
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
