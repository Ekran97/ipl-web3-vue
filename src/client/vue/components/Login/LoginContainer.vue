<template>
    <login-component
        :email="email"
        :password="password"
        :authenticate="authenticate"
        :onFieldChange="onFieldChange"
    />
</template>

<script>
import sendApiRequest from "../../../utils/api.js";
import LoginComponent from "./LoginComponent.vue";
import { mapActions } from 'vuex';

export default {
    name: 'login-container',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        ...mapActions('session', ['login'] ), // --> this.login
        authenticate() {
            this.login({ email: this.email, password: this.password })
                .then((response) => this.$router.push('/messages'));
        },
        onFieldChange(event) {
            this[event.target.name] = event.target.value;
        }
    },
    components: {
        LoginComponent
    }
}

</script>