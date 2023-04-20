<template>
  <div v-if="ff" class="overlay bg-[#00000000] w-[100%] absolute h-[400vh]">s</div>
 <main class="  flex flex-col  ">
  <Nav :open="open" class="px-[25px] md:hidden" />
  <MobileNav class="z-[10]"/>
  <Hero class="px-[25px]"/>
<Testimoies class="px-[25px]"/>
<About class="px-[25px]"/>
<Services class="px-[25px]"/>
<Custormers class="px-[25px]"/>
<Faq class="px-[25px]"/>

 </main>
 <Footer/>
</template>

<script setup>
import Nav from '../components/Header.vue'
import MobileNav from '../components/MobileNav.vue'
import Hero from '../components/Hero.vue'
import Testimoies from '../components/Testimonial.vue'
import About from '../components/AboutUs.vue'
import Services from '../components/Services.vue'
import Custormers from '../components/Client.vue'
import Faq from '../components/Faq.vue'
import Footer from '../components/Footer.vue'
import {ref} from 'vue'

</script>



