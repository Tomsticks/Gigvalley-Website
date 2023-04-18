<template>
    <body class="flex items-center justify-center ">
        
    <main class="flex h-[100vh] w-[100%]] ">
    <Nav/>
        
<div class="submain flex flex-col w-[100%] px-[20px]">
<div class="head border-b border-black flex justify-end h-[6vh] bg-primary text-[white] pr-[20px]   ">
 <Head class=" self-start  self-center"/>
</div>
<body class="  h-[100vh] overflow-y-scroll">
    <Body/>
</body> 
</div>
    </main>
</body>
</template>

<script setup>
import Head from '@/components/Home/DashHead.vue'
import Nav from '@/components/Home/DashNav.vue'
import Body from '@/components/Home/DashboardBody.vue'
</script>