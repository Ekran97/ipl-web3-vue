<template>
    <b-navbar type="dark" variant="dark" fixed="bottom">
        <b-button>Dark/Light</b-button>
        <b-navbar-brand>Username: YOLO</b-navbar-brand>
    </b-navbar>
</template>

<script>
export default {
    name: 'the-footer',
    props:{
        username: String,
        bg: String,
        variant: String,
        toggleType: Function
    }
}
</script>
