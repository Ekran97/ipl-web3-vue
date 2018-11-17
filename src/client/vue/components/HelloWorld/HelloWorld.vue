<template>
    <div>
        <b-alert variant="info">
            Hello {{name}}
        </b-alert>
    </div>
</template>
<script>
export default {
    name: "HelloWorld",
    props:[
        'name'
    ]
}
</script>

