<template>
    <div>
        <div v-if="authenticated" >
            {{ this.$router.push('/messages')}}</div>
                <login-component v-if="!authenticated"
        :email="email"
        :password="email"
        :authenticate="authenticate"
        :onFieldChange="onFieldChange"
    />
    </div>
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
            password: ""
        }
    },
    methods: {
        onFieldChange(event) {
            this[event.target.name] = event.target.value
        },
        authenticate() {
            this.$store.commit('login',{email:this.email, password:this.password});
        }
    },
    computed: {
        authenticated(){
            return this.$store.getters.isAuthenticated;
        }
    },
    components: {
        LoginComponent
    }
}

</script>