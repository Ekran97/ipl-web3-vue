<template>
    <b-navbar
        toggleable="md"
        :type="type"
        :variant="variant"
    >
        <b-navbar-brand to="/">Navbar</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item to="/" exact>Hello</b-nav-item>
            <b-nav-item to="/todo">Todo</b-nav-item>
            <b-nav-item to="/messages">Messages</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <the-search-form/>
                <b-button
                    variant="outline-warning"
                    to="/login"
                    v-if="!authenticated"
                >
                    Login
                </b-button>
                <b-button
                    variant="outline-warning"
                    @click="logoutAndRedirect"
                    v-else
                >
                    Logout
                </b-button>
            </b-nav-form>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import TheSearchForm from "./TheSearchForm.vue";

const TheNavbar = Vue.component("the-navbar", {
    components: {
        TheSearchForm
    },
    computed: {
        ...mapState('theme', ['type', 'variant']),
        ...mapState('session', ['authenticated'])
    },
    methods: {
        ...mapActions('session', ['logout']),
        logoutAndRedirect() {
            this.logout();
            this.$router.push('/login');
        }
    }
});

export default TheNavbar;
</script>
