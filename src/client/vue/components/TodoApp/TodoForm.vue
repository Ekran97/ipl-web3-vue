<template>
    <b-form @submit.prevent="handleSubmit">
        <b-form-group label="Task">
            <b-form-input
                type="text"
                placeholder="Feed the cat"
                @change="handleChange"
                :value="currentText"
            >
            </b-form-input>
            <b-form-text class="bv-text-muted"><!-- peut etre text-muted ?-->
                What needs to be done?
            </b-form-text>
        </b-form-group>
        <b-button
            variant="primary"
            type="submit"
        >
            Add #{{ nextPosition }}
        </b-button>
    </b-form>
</template>

<script>
export default {
    name: 'todo-form',
    props: {
        handleSubmit: Function,
        handleChange: Function,
        nextPosition: Number,
        currentText: String
    }
}
</script>
