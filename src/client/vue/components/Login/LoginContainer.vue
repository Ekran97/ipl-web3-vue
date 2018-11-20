<template>
    <login-component v-if="!!!jwt" :email="email" :password="email" :authenticate="authenticate" :onFieldChange="onFieldChange"/>
</template>

<script>
import sendApiRequest from "../../../utils/api.js";
import LoginComponent from "./LoginComponent.vue";

export default {
    name: 'login-container',
    props: {
        login: Function,
        jwt: String
    },
    data() {
        return {
            email: "",
            password: "",
            authenticated: false,
            jwt: null
        }
    },
    methods: {
        onFieldChange(event) {
            this[event.target.name] = event.target.value
        },
        authenticate() {
            this.props.login(this.data);
        }
    },
    components: {
        LoginComponent
    }
}

</script>