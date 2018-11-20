<template>
    <b-navbar :type="type" :variant="variant" fixed="bottom">
        <b-button @click="toggleType">Dark/Light</b-button>
        <b-navbar-brand>Username: {{ username }}</b-navbar-brand>
    </b-navbar>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

const TheFooter = Vue.component('the-footer', {
    name: 'the-footer',
    computed: {
        ...mapState('theme', ['type', 'variant', ] ),
        ...mapState('session', ['username'])
    },
    methods:{
        ...mapMutations('theme', ['toggleType'] )
    }
});

export default TheFooter;
</script>
