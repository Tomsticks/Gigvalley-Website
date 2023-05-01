import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { router } from './router'
import { VueCarousel } from 'vue-carousel'

const app = createApp(App)

app.use(router)

app.component('VueCarousel', VueCarousel)

app.mount('#app')
