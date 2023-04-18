<template>
  <div class="grid place-items-center h-[100vh] bg-[#eee]">
    <div class="flex flex-col w-[80vh] h-[70%] rounded-xl justify-center items-center bg-primary">
    <h1 class="mb-7 capitalize text-white font-semibold text-2xl">
      select a payment method
    </h1>
    <div class="flex flex-col gap-6 mt-5 w-full items-center  ">
      <button class="flex items-center justify-between px-6 py-2 bg-white text-primary w-[70%] h-35 text-lg rounded-lg font-semibold capitalize">payment gateway<img   class="w-8 h-8"  src="../assets/images/paymentt.png" alt=""></button>
      <button class="flex items-center justify-between px-6 py-2 bg-white text-primary w-[70%] h-35 text-lg rounded-lg font-semibold capitalize"><p>automated funding</p><svg  class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path>
</svg></button>
      <button class="flex items-center justify-between px-6 py-2 bg-white text-primary w-[70%] h-35 text-lg rounded-lg font-semibold capitalize"><p>bank transfer</p> <svg class="w-8 h-8"  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
</svg></button>
    </div>
  </div>
  </div>
</template>
