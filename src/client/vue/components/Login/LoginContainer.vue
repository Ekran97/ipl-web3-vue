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
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'login-container',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    computed: {
        ...mapState('session', ['authenticated'] )
    },
    methods: {
        ...mapMutations('session', ['login'] ),
        onFieldChange(event) {
            this[event.target.name] = event.target.value;
        },
        authenticate() {
            this.login({email:this.email, password:this.password});
        }
    },
    components: {
        LoginComponent
    }
}

</script>