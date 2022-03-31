import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import VueToast from 'vue-toast-notification';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { initializeApp } from 'firebase/app'
// import  VueGoogleMaps from '@fawmi/vue-google-maps'

/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyB9U0RZx7PIlYlhLwspVtLCkZjfakK6OG8",
    authDomain: "vue-vite-shop-blog-temp.firebaseapp.com",
    projectId: "vue-vite-shop-blog-temp",
    storageBucket: "vue-vite-shop-blog-temp.appspot.com",
    messagingSenderId: "53640748036",
    appId: "1:53640748036:web:798385b2bcd47ce5052951",
    measurementId: "G-BLTDLDWSP0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

library.add(fas)

createApp(App)
    .use(createPinia())
    .use(router)
    .use(VueToast)
    .component('fa', FontAwesomeIcon)
    // .use(VueGoogleMaps, {
    //     load: {
    //         key: ""
    //     }
    // })
    .mount('#app')
