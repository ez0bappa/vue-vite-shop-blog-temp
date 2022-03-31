import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import VueToast from 'vue-toast-notification';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

createApp(App)
    .use(createPinia())
    .use(router)
    .use(VueToast)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
