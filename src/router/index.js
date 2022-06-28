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

const PathNotFound = () => import(/* webpackChunkName: "Bappa Not Found" */ '../components/template/PathNotFound.vue')

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
        path: '/products-manager',
        name: 'Products',
        component: Products,
        children: [
            {
                path: '/product-lists',
                name: 'ProductLists',
                component: ProductLists,
            },
            {
                path: '/add-product',
                name: 'AddProduct',
                component: AddProduct,
            },
            {
                path: '/pinia-distribution',
                name: 'PiniaStoreManagement',
                component: PiniaStoreManagement,
                children: [
                    {
                        path: '/post-list',
                        name: 'postList',
                        component: PostList,
                    },
                    {
                        path: '/create-post',
                        name: 'PostCreate',
                        component: PostCreate,
                    },
                ]
            },
            {
                path: '/locate-us',
                name: 'Maps',
                component: Maps,
            },
            {
                path: '/async-product-lists',
                name: 'AsyncProductsList',
                component: AsyncProductsList,
            },
            {
                path: '/sidebar-modal',
                name: 'SidebarModal',
                component: SidebarModal,
            },
            {
                path: '/skeleton-loading',
                name: 'SkeletonHome',
                component: SkeletonHome,
            },
        ]
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