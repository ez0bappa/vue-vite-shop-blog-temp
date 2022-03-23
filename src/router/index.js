import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home/Home.vue';
import Shop from '../components/Home/Shop/Shop.vue';
import Contact from '../components/Home/Contact/Contact.vue';
import Register from '../components/Home/Auth/Register.vue';
import Login from '../components/Home/Auth/Login.vue';
import Dashboard from '../components/Home/User/Dashboard.vue';
import PhoneContacts from '../components/Home/Contact/PhoneContacts.vue';
import About from '../components/Home/Contact/About.vue';
import Cart from '../components/Home/Cart/Cart.vue';
import PathNotFound from '../components/template/PathNotFound.vue';
// import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

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
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
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
                meta: {
                    requireAuth: true
                }
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

router.beforeEach((to, from, next) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const authenticatedUser = user;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    
    if ( requiresAuth && ! authenticatedUser ) {
        alert("You are not authorized to access this area.");
        next("login");
    }
    else {
        next();
    }
});

export default router