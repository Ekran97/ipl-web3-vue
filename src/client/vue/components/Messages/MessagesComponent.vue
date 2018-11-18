<template>
    <b-list-group>
        <message-item v-for="message in messages"
            :key="message.id"
            :message="message"
            :deleteMessage="deleteMessage"
        />
    </b-list-group>
</template>
    
<script>
import MessageItem from './MessageItem.vue';

export default {
    name: 'messages-component',
    props: {
        messages: Array,
        deleteMessage: Function
    },
    components: {
        MessageItem
    }
}
</script>