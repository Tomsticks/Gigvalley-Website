<template>
      <body class="flex items-center justify-center">
  <main class="flex  border w-[100%]   ">
  <Nav v-if="toggle"/>
      
<div class="submain flex flex-col">
<div class="head border border-black ">
  <Head :pass="openNav" class=" self-start self-center"/>
</div>
<body class="border border-black h-[90vh]">
  <Airtime/>
</body>
</div>
  </main>
</body>
</template>

<script setup>
import Nav from '@/components/Home/DashNav.vue'
import Airtime from '@/components/Home/BuyAirtime.vue'
import Head from '@/components/Home/DashHead.vue'
import {ref} from 'vue'
const toggle = ref(false)
function openNav(){
    toggle.value = !toggle.value
}
</script>