import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';



import axios from 'axios'
axios.defaults.baseURL="http://localhost:8080/"
createApp(App).use(router).mount('#app')
