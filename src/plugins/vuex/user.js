import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/users/auth', data)
                    .then((response) => {
                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.log('error')
                        reject()
                    })
            })
        },
        createUser(context, user) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/users/my', user)
                    .then((response) => {
                        context.commit('updateUser', response.data)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },

        updateUser(state, user) {
            state.user = user
        }
    },

    state: {
        token: localStorage.getItem('token'),
        user: null
    },

    getters: {
        getToken(state) {
            return state.token
        },

        getUser(state) {
            return state.user
        }
    }
}