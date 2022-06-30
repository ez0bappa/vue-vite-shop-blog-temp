import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home/Home.vue';
import Shop from '../components/Home/Shop/Shop.vue';
import Products from '../components/Home/Products/Products.vue';
import ProductLists from '../components/Home/Products/ProductLists.vue';
import AddProduct from '../components/Home/Products/AddProduct.vue';
import AsyncProductsList from '../components/Home/Products/ListsComponents/AsyncParentProductsList.vue';
import SidebarModal from '../components/Home/Products//Sidebar/SidebarModal.vue';
import SkeletonHome from '../components/Home/Products/SkeletonLoading/ProfileCardSkeleton.vue';
import PiniaStoreManagement from '../components/Home/Pinia/PiniaStoreManagement.vue';
import PostList from '../components/Home/Pinia/Posts/PostList.vue';
import PostCreate from '../components/Home/Pinia/Posts/PostCreate.vue';
import Maps from '../components/Home/Products/Maps/Maps.vue';
import Contact from '../components/Home/Contact/Contact.vue';
import Register from '../components/Home/Auth/Register.vue';
import Login from '../components/Home/Auth/Login.vue';
import Dashboard from '../components/Home/User/Dashboard.vue';
import PhoneContacts from '../components/Home/Contact/PhoneContacts.vue';
import About from '../components/Home/Contact/About.vue';
import Cart from '../components/Home/Cart/Cart.vue';
import MaintainanceHome from '../components/MaintainancePage/MaintainanceHome.vue';

const PathNotFound = () => import(/* webpackChunkName: "Bappa Not Found" */ '../components/template/PathNotFound.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { middleware: true },
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop,
        meta: { middleware: true },
    },
    {
        path: '/products-manager',
        name: 'Products',
        component: Products,
        meta: { middleware: true },
        children: [
            {
                path: '/product-lists',
                name: 'ProductLists',
                component: ProductLists,
                meta: { middleware: true },
            },
            {
                path: '/add-product',
                name: 'AddProduct',
                component: AddProduct,
                meta: { middleware: true },
            },
            {
                path: '/pinia-distribution',
                name: 'PiniaStoreManagement',
                component: PiniaStoreManagement,
                meta: { middleware: true },
                children: [
                    {
                        path: '/post-list',
                        name: 'postList',
                        component: PostList,
                        meta: { middleware: true },
                    },
                    {
                        path: '/create-post',
                        name: 'PostCreate',
                        component: PostCreate,
                        meta: { middleware: true },
                    },
                ]
            },
            {
                path: '/locate-us',
                name: 'Maps',
                component: Maps,
                meta: { middleware: true },
            },
            {
                path: '/async-product-lists',
                name: 'AsyncProductsList',
                component: AsyncProductsList,
                meta: { middleware: true },
            },
            {
                path: '/sidebar-modal',
                name: 'SidebarModal',
                component: SidebarModal,
                meta: { middleware: true },
            },
            {
                path: '/skeleton-loading',
                name: 'SkeletonHome',
                component: SkeletonHome,
                meta: { middleware: true },
            },
        ]
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { middleware: true },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { middleware: true },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { middleware: true },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { middleware: true },
        children: [
            {
                path: '/phone-contacts',
                name: 'PhoneContacts',
                component: PhoneContacts,
                meta: { middleware: true },
            },
            {
                path: '/about',
                name: 'About',
                component: About,
                meta: { middleware: true },
            },
        ]
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta: { middleware: true },
    },
    {
        path: '/maintainance-page',
        name: 'MaintainanceHome',
        component: MaintainanceHome,
        meta: { middleware: false }
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

// router.beforeEach((to, from, next) => {
//     let dt = new Date;
//     let currentTime = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
//     // console.log(dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds())

//     // When time reaches
//     if(dt.getHours() === 13 && (dt.getMinutes() >= 27 && dt.getMinutes() < 60) && dt.getMinutes() > 0) {
//         console.log('Current time - Maintaine mode on: ', currentTime)
//         return next('/asdf')
//     } else {
//         next('/')
//     }
// })

export default router