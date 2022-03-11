import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home/Home.vue';
import Shop from '../components/Home/Shop/Shop.vue';
import PathNotFound from '../components/template/PathNotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PathNotFound',
        component: PathNotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router