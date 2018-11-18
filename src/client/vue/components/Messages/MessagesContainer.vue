<template>
    <messages-component
        :messages="messages"
        :deleteMessage="deleteMessage"
    />
</template>

<script>
import MessagesComponent from "./MessagesComponent.vue";
import sendApiRequest from "../../../utils/api";

export default {
    name: 'messages-container',
    data() {
        return {
            messages: []
        };
    },
    methods:{
        deleteMessage: function(message) {
            const url = `/api/messages/${message._id}`
            sendApiRequest({
                url,
                method: "DELETE",
            })
            .then((_ignored) => {
                const messages = this.messages;
                const messageIndex = messages.indexOf(message);
                if (messageIndex > -1) {
                    messages.splice(messageIndex, 1);
                }
                this.messages = messages;
            })
            .catch((error) => {
                console.error(error);
                this.messages = [];
            })
        }
    },
    components:{
        MessagesComponent
    },
    mounted: function(){
        fetch("api/messages", {
            method: "GET"
        }).then((messages) => {
            this.messages = messages;
        }).catch((error) => {
            console.error(error);
            this.messages = [];
        })
    }
}
</script>

