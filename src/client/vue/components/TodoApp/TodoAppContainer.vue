<template>
    <todo-app-component
        :currentText="text"
        :items="items"
        :handleSubmit="handleSubmit"
        :handleChange="handleChange"
    />
</template>

<script>
import TodoAppComponent from "./TodoAppComponent.vue";

export default {
    name: 'todo-app-container',
    data() {
        return {
            items: [],
            text: ""
        };
    },
    methods:{
        handleSubmit: function(e) {
            const newItem = {
                text: this.text,
                id: Date.now()
            };
            this.items = this.items.concat(newItem);
            this.text = "";
        },
        handleChange: function(msg) {
            this.text = msg;
        }
    },
    components:{
        TodoAppComponent
    }
}
</script>
