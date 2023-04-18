<template>
    <body class="flex ">
        
    <main class="flex h-[100vh] w-[100%]] ">
    <Nav/>
        
<div class="submain flex flex-col w-[100%] px-[20px]">
<div class="head rounded-tr-[20px] rounded-tl-[20px] filter w-[100%] relative  flex justify-end h-[6vh] shadow-lg  pr-[20px]   ">
    
 <Head class=" self-start  "/>
</div>
<body class="  h-[100vh] overflow-y-scroll overflow-x-hidden">
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