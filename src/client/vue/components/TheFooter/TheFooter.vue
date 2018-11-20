<template>
    <b-navbar :type="type" :variant="variant" fixed="bottom">
        <b-button @click="toggleType">Dark/Light</b-button>
        <b-navbar-brand>Username: {{ this.username }}</b-navbar-brand>
    </b-navbar>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

const TheFooter = Vue.component('the-footer', {
    name: 'the-footer',
    data() {
        return {
            username: 'Hello',
        }
    },
    computed: mapState( ['type', 'variant'] ),
    methods: {
        toggleType() {
            this.$store.commit('toggleType');
        }
    }
});

export default TheFooter;
</script>
