<template>
    <div>
        <div v-if="authenticated" >
            {{ this.$router.push('/messages')}}
        </div>
        <login-component v-else
            :email="email"
            :password="password"
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
            this[event.target.name] = event.target.value;
        },
        authenticate() {
            this.$store.commit('login',{email:this.email, password:this.password});
        }
    },
    computed: mapState( ['authenticated'] ),
    components: {
        LoginComponent
    }
}

</script>