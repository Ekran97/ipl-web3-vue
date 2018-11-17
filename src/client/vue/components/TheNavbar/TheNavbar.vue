<template>
    <b-navbar toggleable="md" variant="dark" type="dark">
        <b-navbar-brand>Navbar</b-navbar-brand>
        <b-collapse is-nav id="navcollapse">
        <b-navbar-nav>
            <b-nav-item to="/" exact>Hello</b-nav-item>
            <b-nav-item to="/todo">Todo</b-nav-item>
            <b-nav-item to="/messages">Messages</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item>Logout</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <TheSearchForm/>
            </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
import Vue from "vue";
import TheSearchForm from "./TheSearchForm.vue";

const TheNavBar = Vue.component("TheNavbar", {
    component: {
        TheSearchForm
    }
});

export default TheNavBar;
</script>
