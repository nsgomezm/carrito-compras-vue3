
import { createApp } from 'vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
