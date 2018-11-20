<template>
    <login-component v-if="!authenticated"
        :email="email"
        :password="email"
        :authenticate="authenticate"
        :onFieldChange="onFieldChange"
    />
</template>

<script>
import sendApiRequest from "../../../utils/api.js";
import LoginComponent from "./LoginComponent.vue";
import { mapState } from 'vuex';

export default {
    name: 'login-container',
    data() {
        return {
            email: "",
            password: "",
            authenticated: this.$store.getters.isAuthenticated
        }
    },
    methods: {
        onFieldChange(event) {
            console.log(event);
            this[event.target.name] = event.target.value
        },
        authenticate() {
            this.$store.commit('login',{email:this.email, password:this.password});
        }
    },
    components: {
        LoginComponent
    }
}

</script>