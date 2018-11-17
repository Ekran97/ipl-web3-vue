<template>
    <b-list-group-item>
        {{text}}
    </b-list-group-item>
</template>

<script>
export default {
    name: 'todo-item',
    props:[
        'text'
    ]
}
</script>
