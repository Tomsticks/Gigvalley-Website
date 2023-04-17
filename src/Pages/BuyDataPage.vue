<template>
  <main class="flex  border r w-[100%] border-[red] ">
  <Nav/>
      
<div class="submain flex flex-col">
<div class="head border border-black ">

</div>
<body class="border border-black h-[90vh]">
  <Data/>
</body>
</div>
  </main>
</template>

<script setup>
import Nav from '@/components/Home/DashNav.vue'
import Data from '@/components/Home/BuyData.vue'
</script>