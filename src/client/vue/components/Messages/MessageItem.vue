<template>
    <b-row>
        <b-col xs="8">{{message.text}}</b-col>
        <b-col xs="4">
            <b-button-toolbar>
                <b-button variant="outline-primary">
                    <b-link to=detailsPath>Détails</b-link>
                </b-button>
                <b-button variant="danger" v-on:click="deleteMessage(message)">
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
    }
}
</script>

