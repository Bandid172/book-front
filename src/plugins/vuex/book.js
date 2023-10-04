import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchBooks(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/books')
                    .then((response) => {

                        let books = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },
        fetchBook(context, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/books/' + bookId)
                    .then((response) => {
                        console.log(response)
                        let book = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                            category: response.data.category,
                            picture: response.data.picture.contentUrl
                        }

                        context.commit('updateBook', book)
                        resolve()
                    })
                    .catch(() => {
                        console.log('error')
                        reject()
                    })
            })
        },

        pushBook(context, book) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/books', book)
                    .then((response) => {
                        context.commit('updateBook', response.data)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })

        }
    },

    mutations: {
        updateBooks(state, books) {
            state.books = books
        },

        updateBook(state, book) {
            state.book = book
        }
    },

    state: {
        books: {
            models: [],
            totalItems: 0
        },
        book: {
            id: null,
            name: null,
            description: null,
            text: null,
            category: null,
            picture: null
        }
    },

    getters: {
        getBooks(state) {
            return state.books.models
        },

        getBook(state) {
            return state.book
        }
    }
}