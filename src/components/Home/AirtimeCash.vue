<template>
   <div class="grid place-items-center h-full border bg-[#eee] sm:bg-[white] ">
    <form @submit.prevent="submit" class="flex flex-col items-center rounded-[10px] justify-around w-[450px] bg-[white] px-[20px] p-1 h-[70%] gap-1 sm:w-[100%] sm:bg-[#eee]">
        <p class="text-xl font-medium text-center capitalize">airtime to cash</p>
        <div class="flex flex-col w-full gap-2">
            <select name="provider" id="provider" class="p-1 border-b  border-primary ">
                <option value="nill" selected hidden disabled required>Select a Service Provider</option>
                <option value="mtn">MTN</option>
                <option value="airtel">AIRTEL</option>
                <option value="glo">GLO</option>
            </select>
            <input name="phoneNumber" type="text" maxlength="11" class="p-1 bg-transparent border-b  outline-none border-primary" placeholder="Enter phone number">
            <div class=" p-1 border-b  border-primary ">
                <input type="text" class="w-[90%] bg-transparent outline-none" placeholder="&#8358; Enter amount">
            </div>
            <input type="password" class="p-1 border-b  border-primary outline-none " placeholder="Enter pin">
        </div>
        <button class="text-[#FFF] bg-primary  w-[50%] p-[5px] text-[20px] capitalize text-center ">proceed</button>
    </form>
   </div>
</template>

<script setup>
import {ref} from 'vue'

const submit = async()=>{

}
</script>