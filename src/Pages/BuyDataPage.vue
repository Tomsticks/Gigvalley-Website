<template>
  <div
    @click="closeNav"
    v-if="isOpen"
    class="overlay bg-[#00000078] absolute h-[100%] w-[100%]"
  ></div>
  
  <body class="flex">
    <main class="flex h-[100vh] w-[100%] border-">
      <Nav
        :close="closeNav"
        :class="{ class: isOpen }"
        class="hidde"
        :open="openNav"
      />

      <div class="submain flex flex-col w-[100%] px-[20px]">
        <div
          class="head rounded-tr-[20px] rounded-tl-[20px] filter  relative h-[6vh] shadow-lg pr-[20px]"
        >
          <Head :pass="openNav" />
        </div>
        <body class="h-[100vh]  border  overflow-y-scroll overflow-x-hidden">
<Data class="w-[100%]"/>
        </body>
      </div>
    </main>
  </body>
</template>

<script setup>
import Head from "@/components/Home/DashHead.vue";
import Nav from "@/components/Home/DashNav.vue";
import Data from '@/components/Home/BuyData.vue'

import BuyAirtime from '@/components/Home/BuyAirtime.vue'
import Body from "@/components/Home/DashboardBody.vue";
import { ref } from "vue";
const toggle = ref(false);

const isOpen = ref(false);
const check = !toggle.value;
function openNav() {
  isOpen.value = !isOpen.value;
}

function closeNav() {
  isOpen.value = !isOpen.value;
}
</script>
<style>
.class {
    left: 0px;
    animation: fadeIn .5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
</style>