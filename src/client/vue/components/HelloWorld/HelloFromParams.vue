<template>
    <b-alert show variant="info">
        Hello {{ name }}
    </b-alert>
</template>

<script>
export default {
    name: 'hello-from-params',
    props: {
        name: String
    }
}
</script>
