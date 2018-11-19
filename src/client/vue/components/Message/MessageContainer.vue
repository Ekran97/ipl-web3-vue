<template>
    <message-component :message="this.message" />
</template>

<script>
import sendApiRequest from "../../../utils/api.js";
import MessageComponent from "./MessageComponent.vue";

export default {
    name: 'message-container',
    props: {
        id: String
    },
    data() {
        return {
            message: null
        }
    },
    methods: {
       fetchMessage() {
           const url = `/api/messages/${this.id}`;
           sendApiRequest({ url})
            .then((message) => {
                this.message = message;
            })
            .catch((error) => {
                console.error(error);
                this.message = [];
            });
       } 
    },
    mounted(){
        setTimeout(this.fetchMessage, 2000);
    },
    components: {
        MessageComponent
    }
}
</script>
