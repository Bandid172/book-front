import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchCategories(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/categories')
                    .then((response) => {

                        let categories = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateCategories', categories)

                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateCategories(state, categories) {
            state.categories = categories
        }
    },

    state: {
        categories: {
            models: [],
            totalItems: 0
        }
    },

    getters: {
        getCategories(state) {
            return state.categories.models
        }
    }
}