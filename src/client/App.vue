<template>
  <div id="app">
    <TheNavbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "vue/components/TheNavbar/TheNavbar.vue";

export default {
  name: 'app',
  components:{
    TheNavbar
  }
}
</script>

<style lang="scss">
</style>
