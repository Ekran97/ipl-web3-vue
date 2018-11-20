<template>
    <b-navbar toggleable="md" :variant="variant" :type="type">
        <b-navbar-brand to="/">Navbar</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item to="/" exact>Hello</b-nav-item>
            <b-nav-item to="/todo">Todo</b-nav-item>
            <b-nav-item to="/messages">Messages</b-nav-item>
            <b-nav-item to="/login" v-if="!authenticated">Login</b-nav-item>
            <b-nav-item v-else>Logout</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
               <the-search-form/>
            </b-nav-form>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import TheSearchForm from "./TheSearchForm.vue";

const TheNavbar = Vue.component("the-navbar", {
    methods: {
        logout(){
            
        }
    },
    components: {
        TheSearchForm
    },
    computed: mapState(['type', 'variant', 'authenticated'])
});

export default TheNavbar;
</script>
