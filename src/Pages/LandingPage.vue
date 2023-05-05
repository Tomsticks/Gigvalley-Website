<template>
 
 <div class="screen">
   <!-- <p class="md:hidden">Not Available On DESKTOP For Now</p> -->
 <main class="  flex flex-col overflow-x-hidden  ">
  <Nav :class="{scroll:isScrolled}"   
   class="px-[25px] z-20 md:hidden" />
  <MobileNav :class="{class:isScrolled}" class="z-[20]"/>
  <Hero class=" hide px-[25px]"/>
<Testimoies class="px-[25px]"/>
<About class="px-[25px]"/>
<Services class="px-[25px]"/>
<Custormers />
<Faq class="px-[25px]"/> 

 </main>
 <Footer/>
 </div>
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
import {ref ,onMounted, onUnmounted} from 'vue'
const isScrolled = ref(false);

const handleScroll = () => {
  const scrollPosition = window.pageYOffset;
  isScrolled.value = scrollPosition > 400 ? true : false;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<style scoped>
   
.scroll{
  position: fixed;
  width: 100%;
top:0 ;
z-index: 10;
background-color: white;
margin-top: 0;
}

.hide{
  @apply md:hidden
}
</style>


