import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        pushPicture(context, formData) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/media_objects', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        context.commit('updatePicture', response.data)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    },

    mutations: {
        updatePicture(state, picture) {
            state.picture = picture
        }
    },

    state: {
        picture: null
    },

    getters: {
        getPicture(state) {
            return state.picture
        }
    }
}