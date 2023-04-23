<template>
   <main class="flex items-center justify-between ">
<!-- <div class="overlay bg-[#0000000b] absolute w-[100%] h-[100vh]">s</div> -->
    <svg @click="navFunction" class="h-[7vh] hidden lg:flex" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
</svg>
    <svg @click="userDropDown" class="h-[6vh] text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>

<div v-if="user" class="user bg-[#ffffff] shadow-xl gap-2  fixed top-[46px] text-primary text-[17px] font-semibold rounded-lg w-[200px] py-[10px] right-[30px]  flex flex-col items-center justify-center ">

  <h1 class="flex items-center gap-[5px] border-b pb-[10px]  border-primary w-[100%]"> <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"></path>
</svg>Logout</h1>

  <h1 class="flex items-center gap-[5px] w-[100%]"> <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>Profile</h1>
</div>
    
   </main>
</template>

<script setup>
import {ref} from 'vue'
import {provide} from 'vue'

const toggleNav = defineProps(['pass'])

const navFunction = toggleNav.pass
const user = ref(false)
function userDropDown(){
  user.value = !user.value
}



</script>