<template>
  <div>
    <the-navbar/>
    <b-container fluid>
      <b-row>
        <b-col xs="2"/>
        <b-col xs="8">
          <router-view/>
        </b-col>
        <b-col xs="2"/>
      </b-row>
    </b-container>
    <the-footer/>
  </div>
</template>

<script>
import TheNavbar from "vue/components/TheNavbar/TheNavbar.vue";
import TheFooter from "vue/components/TheFooter/TheFooter.vue";

export default {
  name: 'app',
  components:{
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
</style>
