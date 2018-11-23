<template>
    <b-jumbotron>
        <h3>Messages</h3>
        <pulse-loader v-if="!message"/>
        <p v-else>{{ message.title }} - {{ message.text }}</p>
    </b-jumbotron>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
    name: 'message-component',
    props: {
        message: Object
    },
    components: {
        'pulse-loader': PulseLoader
    }
}
</script>
