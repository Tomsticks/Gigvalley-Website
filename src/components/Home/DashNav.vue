<template>
  <header  class=" shadow-2xl z-10 px-[40px]  overflow-y- overflow-x-hidden flex flex-col items-center bg-[#] text-[#] lg:absolute lg:bg-[white]  lg:z-1 overflow-y-scroll h-[100%] lg:left-[-350px]  ">
<!-- <p @click="navClose">CLICK ME</p> -->
   
    <div class="user shadow-md  mt-[10px] w-[100%] py-[15px] gap-[10px] rounded-[px] items-center justify-center  flex ">
      <div class="user-img">
        <img class="rounded-[50px] h-[7vh]" src="./HomeImages/avatar.png" alt="">
      </div>
      <div class="user-text">
        <h1 class="">Toluwani</h1>
        <h3 class="">Balance: <span class="amount"> &#8358{{ Balance }}</span></h3>
      </div>
    </div>
    
    <!-- Links -->
    <div active class="links_div flex flex-col gap-[40px] mt-[30px] px-[5px]  ">

      <router-link class="flex link" active-class="active" to="/dashboard">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">
          </path>
        </svg> Dashboard</router-link>


      <!-- ================== -->
      <router-link class="flex link" active-class="active" to="/Profile"> <svg fill="none" stroke="currentColor"
          stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z">
          </path>
        </svg> Profile</router-link>

      <!-- =========================== -->

      <router-link class="flex link" active-class="active" to="/buyAirtime"> <svg fill="none" stroke="currentColor"
          stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
          </path>
        </svg> Buy Airtime</router-link>

      <!-- ========================== -->
      <router-link class="flex link" active-class="active" to="/buyData"> <svg fill="none" stroke="currentColor" stroke-width="1.5"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z">
          </path>
        </svg>Buy Data</router-link>

      <!-- ========================= -->
      <router-link class="flex link" active-class="active" to="/AirtimetoCash">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3">
          </path>
        </svg>Airtime to Cash</router-link>

      <!-- =========================== -->
<hr>
      <router-link class="flex link" active-class="active" to="/"> <svg fill="none" stroke="currentColor" stroke-width="1.5"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
          </path>
        </svg>Account</router-link>

      <!-- ============================== -->

      <router-link class="flex link" active-class="active" to="/"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>LogOut</router-link>
    </div>

  </header>
</template>
<script setup>
import { ref } from 'vue'
import {inject} from 'vue'


const Balance = ref('30, 000')
const props = defineProps(['close'])

const navClose = props.close


const userImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIwASCJpICHRbFDOQXQ2S-pmikc8vs6K2GA&usqp=CAU'
</script>
<style scoped>
.active {
  background-color:#70008f;
  color:white;
  /* border-radius: 10px; */
  padding: 10px 20px;
}</style>