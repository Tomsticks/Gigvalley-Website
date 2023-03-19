import { createRouter , createWebHistory} from 'vue-router'
import HomePage from '@/Pages/LandingPage.vue'
 export const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/', name:'Home', component:HomePage}
       
    ]
})