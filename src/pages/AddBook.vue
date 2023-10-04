<template>
    <form @submit.prevent="addBook">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Book Name</label>
            <input v-model="book.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Book Description</label>
            <input v-model="book.description" type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputText1" class="form-label">Book Text</label>
            <input v-model="book.text" type="text" class="form-control" id="exampleInputText1">
        </div>
        <div class="mb-3">
            <label for="disabledSelect" class="form-label">Book Category</label>
            <select id="disabledSelect" class="form-select" v-model="book.category">
                <option :value="category['@id']" v-for="category of getCategories" :key="category.id">{{ category.name }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="exampleInputText3" class="form-label">Book Picture</label>
            <br>
            <input type="file" @change="uploadFile" ref="file" id="exampleInputText3">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddBook",
    data() {
        return {
            book: {
                name: '',
                description: '',
                text: '',
                category: '',
                picture: '',
            },
            file: ''
        }
    },
    computed: {
        ...mapGetters(['getCategories', 'getPicture'])
    },
    methods: {
        ...mapActions(['pushBook', 'pushPicture']),

        addBook() {
            const formData = new FormData();
            formData.append('file', this.Images)

            this
                .pushPicture(formData)
                .then(() => {
                    this.book.picture = this.getPicture['@id']
                    this.pushBook(this.book)
                })
                .then(() => {
                    this.$router.push('/')
                })
                .catch(() => {
                    console.log('error')
                })
        },

        uploadFile() {
            this.Images = this.$refs.file.files[0];
        },

    },
}
</script>

<style scoped>

</style>