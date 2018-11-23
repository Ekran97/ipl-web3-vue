<template>
    <b-list-group>
        <todo-item
            v-for="item in items"
            :key="item.id"
            :text="item.text"
        />
    </b-list-group>
</template>
    
<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'todo-list',
    props: {
        items: Array
    },
    components: {
        TodoItem
    }
}
</script>
