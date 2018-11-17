<template>
    <b-container>
        <h3>TODO</h3>
        <b-row>
            <b-col>
                <todo-form
                    :handleChange="handleChange"
                    :handleSubmit="handleSubmit"
                    :nextPosition="items.length + 1"
                    :currentText="currentText"
                />
            </b-col>
            <b-col lg="6" xs="12">
                <todo-list :items="items" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
    name: 'todo-app-component',
    props:{
        handleChange: Function,
        handleSubmit: Function,
        currentText: String,
        items: Array
    },
    components: {
        'todo-form': TodoForm,
        'todo-list': TodoList
    }
}
</script>