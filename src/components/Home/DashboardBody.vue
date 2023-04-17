<template>
   <section  class="top flex justify-between   h-[50vh] px-[65px]"  id="greetings-section">
    <div class="hero-text jus">
    <h1 class="text-[50px] text-[white] font-extrabold font-[Raleway] lg:text-[40px] ">Welcome to Gigvalley Technologies</h1>
    <p class="w-[90%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, hic. Ex, nostrum numquam et ut voluptates enim minima porro vitae cumque neque assumenda asperiores ea veritatis eligendi. A, vel assumenda?</p>
</div>
<div class="hero-img">
    <img class="" src="./HomeImages/BodyAvatar.png" alt="">
</div>
   </section>

   <section class="flex border-2 mt-[30px] mx-[20px] rounded-[10px] px-[20px] shadow-md" >
<div class="account_info   flex w-[100%] justify-between item-center py-[10px]">
<div class="Money  ">
    <p class="flex items-center  gap-2 ">Total Balance  <i class="fa-solid fa-eye mt-[8px]"></i> </p>
    
    <div class="balance">
    <span class="text-[20px] font-bold"> &#8358{{ balance }}</span>
</div>
</div>
    <button class=" py-[10px] px-[25px] text-[20px] flex rounded-[50px]  bg-primary text-white ">Fund Wallet</button>
</div> 

   </section>

   <section class="mt-[30px] mx-[20px] " 
   id="services ">
    <h1 class="text-[40px] font-bold text-primary">Our Avaliable Services</h1>
    <div class="allServices border bg-[#F1F1F1] grid  gap-[20px] py-[30px] px-[20px] rounded-[5px] ">
        <!-- EACH -->
<div @click="router.push('/buyAirtime')" class="Buy_Airtime service flex flex-col ">
<div class="image">
<img class="w-[100%] h-[20vh]" src="@/Components/Home/HomeImages/Airtime.png" alt="">
</div>
<p>Airtime</p>

</div>
<div class="Buy_Data service flex flex-col ">
<div class="image">
<img class="w-[100%] h-[20vh]" src="@/Components/Home/HomeImages/Data.png" alt="">
</div>
<p>Buy Data</p>

</div>
<div class="Airtime_ToCash service flex flex-col ">
<div class="image">
<img class="w-[100%] h-[20vh]" src="@/Components/Home/HomeImages/AirCash.png" alt="">
</div>
<p>Convert Airtime to Cash</p>

</div>
<div class="airtimeToCash service flex flex-col ">
<div class="image">
<img  class="w-[100%] h-[20vh]" src="@/Components/Home/HomeImages/WebDev.png" alt="">
</div>
<p>Website Development</p>

</div>

</div>
   </section>
</template>
<style>
.allServices{
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
}
.service{
    @apply border-2  items-center flex justify-center py-[10px] h-[30vh] rounded-[10px] bg-[white]
}
.top{
    background-image: url(../Home/HomeImages/Background.jpg);
    background-position:center ;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const balance = ref('3870.50')
const router = useRouter()


</script> 