<template>
    <h1>{{ getBook.name }}</h1>
    <p>
        {{ getBook.text }}
    </p>
    <img :src="'http://localhost:8505' + getBook.picture" />
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BookInfo",
    methods: {
        ...mapActions(['fetchBook'])
    },
    computed: {
        ...mapGetters(['getBook'])
    },
    mounted() {
        this.fetchBook(this.$route.params.bookId)
    }
}
</script>

<style scoped>

img {
    max-width: 400px;
}
</style>