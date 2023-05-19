<template>
   <div class="grid place-items-center h-full border bg-[#eee] ">
    <form class="flex flex-col items-center justify-around w-full p-1 h-[70%] gap-1">
        <p class="text-xl font-medium text-center capitalize" >airtime to cash</p>
        <div class="flex flex-col w-full gap-2">
            <select name="provider" id="provider" class="p-1 border-b rounded-lg border-primary bg-[#eee]">
                <option value="nill" selected hidden disabled required>select a service provider</option>
                <option value="mtn">mtn</option>
                <option value="airtel">airtel</option>
                <option value="glo">glo</option>
                <option value="9mobile">9mobile</option>
            </select>
            <input type="number" class="p-1 bg-transparent border-b rounded-lg border-primary" placeholder="Enter phone number">
            <div class="flex p-1 border-b rounded-lg border-primary bg-[#eee]">
                <p class="  w-[10%] text-center">&#8358;</p>
                <input type="number" class="w-[90%] bg-transparent" placeholder="Enter amount">
            </div>
            <input type="password" class="p-1 border-b rounded-lg border-primary bg-[#eee]" placeholder="Enter pin">
        </div>
        <button class="text-[#FFF] bg-primary rounded-[10px] w-[50%] p-[5px] text-[20px] capitalize text-center ">proceed</button>
    </form>
   </div>
</template>