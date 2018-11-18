<template>
    <b-navbar toggleable="md" variant="dark" type="dark">
        <b-navbar-brand to="/">Navbar</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item to="/" exact>Hello</b-nav-item>
            <b-nav-item to="/todo">Todo</b-nav-item>
            <b-nav-item to="/messages">Messages</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item>Logout</b-nav-item>
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
import TheSearchForm from "./TheSearchForm.vue";

const TheNavBar = Vue.component("the-navbar", {
    props: {
        logout: Function
    },
    components: {
        TheSearchForm
    }
});

export default TheNavBar;
</script>
