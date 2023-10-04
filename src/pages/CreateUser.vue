<template>
    <form @submit.prevent="addUser">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "CreateUser",
    data() {
        return {
            user: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        ...mapActions(['createUser']),
        addUser() {
            this.createUser(this.user)
        }
    }
}
</script>

<style scoped>

</style>