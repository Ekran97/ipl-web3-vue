<template>
    <b-alert show variant="info">
        Hello {{ name }}
    </b-alert>
</template>

<script>
export default {
    name: 'hello-world',
    props: {
        name: String
    }
}
</script>
