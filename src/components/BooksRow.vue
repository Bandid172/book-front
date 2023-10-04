<template>
    <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" v-for="book of getBooks" :key="book.id">
            <div class="card">
                <img :src="'http://localhost:8505' + book.picture.contentUrl" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ book.name }}</h5>
                    <p class="card-text">{{ book.description }}</p>
                    <router-link :to="'/book-info/' + book.id" class="btn btn-primary">O'qish</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "BooksRow",
    methods: {
        ...mapActions(['fetchBooks'])
    },
    computed: {
        ...mapGetters(['getBooks'])
    },
    mounted() {
        this.fetchBooks()
    }
}
</script>

<style scoped>

</style>