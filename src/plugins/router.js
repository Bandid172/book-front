import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/book-info/:bookId',
        component: () => import('@/pages/BookInfo')
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage')
    },
    {
        path: '/add-book',
        component: () => import('@/pages/AddBook')
    },
    {
        path: '/create-account',
        component: () => import('@/pages/CreateUser')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})