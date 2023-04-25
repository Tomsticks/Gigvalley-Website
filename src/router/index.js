import { createRouter , createWebHistory} from 'vue-router'
import HomePage from '@/Pages/LandingPage.vue'
import BuyData from '@/Pages/BuyDataPage.vue'
import BuyAirtime from '@/Pages/BuyAirtimePage.vue'
import LoginPage from '@/Pages/Login.vue'
import RegisterPage from '@/Pages/Register.vue'
import Dashboard from '@/Pages/Dashboard.vue'
import Fund from '@/Pages/PaymentGateWay.vue'
 export const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/', name:'Home', component:HomePage},
        {path:'/BuyData', name:'Buydata', component:BuyData},
        {path:'/BuyAirtime', name:'Buyairtime', component:BuyAirtime},
        {path:'/login', name:'login', component:LoginPage},
        {path:'/register', name:'register', component:RegisterPage},
        {path:'/dashboard', name:'dashboard', component:Dashboard},
        {path:'/Fund', name:'Fund', component:Fund}
       
    ]
})

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  };
//  