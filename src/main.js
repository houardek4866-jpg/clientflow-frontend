import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 1. On importe le dossier router

const app = createApp(App)

app.use(router) // 2. On dit à Vue d'utiliser le routeur

app.mount('#app') // 3. On finit par le montage
