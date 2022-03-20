import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home/Home.vue';
import Shop from '../components/Home/Shop/Shop.vue';
import Contact from '../components/Home/Contact/Contact.vue';
import Register from '../components/Home/Auth/Register.vue';
import PhoneContacts from '../components/Home/Contact/PhoneContacts.vue';
import About from '../components/Home/Contact/About.vue';
import Cart from '../components/Home/Cart/Cart.vue';
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
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        children: [
            {
                path: '/phone-contacts',
                name: 'PhoneContacts',
                component: PhoneContacts,
            },
            {
                path: '/about',
                name: 'About',
                component: About,
            },
        ]
    },
    
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
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