<template>
    <b-form @submit.prevent="handleSearch">
        <b-form-input class="mr-sm-2" type="text" placeholder="Search"
            @change="(input) => { this.searchInput = input} "
        />
        <b-button type="submit" variant="outline-info" class="my-2 my-sm-0">Search</b-button>
    </b-form>
</template>

<script>
export default {
    name: 'the-search-form',
    data() {
        return {
            searchInput: ""
        }
    },
    methods: {
        handleSearch() {
            const path = `/hello/${this.searchInput}`;
            this.$router.push(path);
        }
    }
}
</script>
