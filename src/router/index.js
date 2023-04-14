import { createRouter , createWebHistory} from 'vue-router'
import HomePage from '@/Pages/LandingPage.vue'
import BuyData from '@/Pages/BuyData.vue'
import BuyAirtime from '@/Pages/BuyAirtime.vue'
import LoginPage from '@/Pages/Login.vue'
import RegisterPage from '@/Pages/Register.vue'
import Dashboard from '@/Pages/Dashboard.vue'
 export const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/', name:'Home', component:HomePage},
        {path:'/BuyData', name:'Buy data', component:BuyData},
        {path:'/BuyAirtime', name:'Buy airtime', component:BuyAirtime},
        {path:'/login', name:'login', component:LoginPage},
        {path:'/register', name:'register', component:RegisterPage},
        {path:'/dashboard', name:'dashboard', component:Dashboard}
       
    ]
})