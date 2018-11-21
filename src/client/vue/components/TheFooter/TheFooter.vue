<template>
    <b-navbar :type="type" :variant="variant" fixed="bottom">
        <b-navbar-nav class="mr-auto">
            <b-navbar-brand>Username: {{ username }}</b-navbar-brand>
        </b-navbar-nav>
        <b-button @click="toggleType" variant="outline-info">Change Theme</b-button>
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
