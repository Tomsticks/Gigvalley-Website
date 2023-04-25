<template>
 <nav :open="open" class=" flex-col border border-[red] hidden md:flex z-10 " id="nav" >
        <div class="nav-img flex justify-between items-center">
          <img class="w-[10vh]" src="@/assets/images/Nav-Logo.png" alt="GigValley Logo" />
          <div @click="open" class="bar">
            <svg  class="h-[5vh]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>
          </div>
        </div>
        <div  v-if="link" class="links flex flex-col absolute top-[60px] bg-primary text-[white] w-[100%]">
          <div @click="open" class="navigator flex flex-col">
        <a href="#">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#services">Service</a>
      </div>
          <h2 @click="openMarket" class=" ">Market Place<i class="fa-solid fa-chevron-down"></i></h2>
          <div  v-if="linked"  class="marketPlace flex flex-col">
            <router-link v-if="userIn" to="/BuyData">Buy Data</router-link>    
            <router-link v-if="userIn" to="/BuyAirtime">Buy Airtime</router-link>    
            <router-link v-if="userIn" to="/"> Cable Subscription</router-link>
            <router-link v-if="userIn" to="/">Electricity Bill</router-link> 
            <router-link v-if="userOut" to="/login">LOGIN</router-link> 
            <router-link v-if="userOut" to="/register">REGISTER</router-link> 
        </div>
      </div>
        <!-- <button @click="loginPage" class="buy-data">Signin</button> -->
      </nav>
</template>
<script setup>
import {ref} from 'vue'
const userIn = ref(false)
const userOut = ref(true)
const link = ref(false)
function open(){
  link.value = !link.value
}
const linked = ref(false)
function openMarket(){
  linked.value = !linked.value
}
const props = defineProps(['open'])
console.log(props.open);
</script> 
<style>
.marketPlace{
  transition: ease-in-out 5s;
}


</style>

