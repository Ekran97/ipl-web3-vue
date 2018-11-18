<template>
    <b-row>
        <b-col xs="8">{{message.title}} - {{message.text}}</b-col>
        <b-col xs="4">
            <b-button-toolbar>
                <b-button :to="detailsPath" variant="outline-primary">
                    Détails
                </b-button>
                <b-button variant="danger" @click="deleteMessage(message)">
                    Delete
                </b-button>
            </b-button-toolbar>
        </b-col>
    </b-row>
</template>

<script>

export default {
    name: 'message-item',
    props: {
        message: Object,
        deleteMessage: Function
    },
    data() {
        return {
            detailsPath: `/message/${this.message._id}`
        }
    }
}
</script>
