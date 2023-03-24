import { createRouter , createWebHistory} from 'vue-router'
import HomePage from '@/Pages/LandingPage.vue'
import BuyData from '@/Pages/BuyData.vue'
import BuyAirtime from '@/Pages/BuyAirtime.vue'
 export const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/', name:'Home', component:HomePage},
        {path:'/BuyData', name:'Buy data', component:BuyData},
        {path:'/BuyAirtime', name:'Buy airtime', component:BuyAirtime}
       
    ]
})