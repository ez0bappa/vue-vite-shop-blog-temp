import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import VueToast from 'vue-toast-notification';

createApp(App)
    .use(createPinia())
    .use(router)
    .use(VueToast)
    .mount('#app')
