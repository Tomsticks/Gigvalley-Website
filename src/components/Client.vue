<template>
  <h1 class="text-center text-2xl font-medium mb-4 mt-16">What Our <span>Clients</span> Are Saying</h1>
  <div class="carousel relative">
    <div class="slider absolute inset-0 flex " :style="{ transform: `translateX(-${slide}px)` }">
      <div class="slide flex-shrink-0 my-1 mr-[5px] bg-[#eee] rounded-xl shadow xs:w-[320px] sm:w-[390px] w-[395px]" v-for="(item, index) in items" :key="index">
       <div class="flex gap-1">
         <!-- <img :src="item.image" alt="image"> -->
         <img src="../assets/images/agent.png" class=" sm:w-28 sm:h-28 xs:w-20 xs:h-20 w-32 h-32" alt="">
       <div class="flex flex-col text-left justify-center">
        <h3 class="text-lg font-medium capitalize">{{ item.name }}</h3>
        <h4 class="text-sm font-medium capitalize opacity-60">{{ item.about }}</h4>
        <div class="flex gap-1">
          <svg class="w-6 h-6 p-1 text-white bg-yellow-600 rounded-full" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-white bg-yellow-600 rounded-full" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-white bg-yellow-600 rounded-full" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-white bg-yellow-600 rounded-full" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-white bg-yellow-600 rounded-full" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
        </div>
      </div>
      
    </div>
    <p class="text-2xl">
      <sub class=" sm:text-xl xs:text-lg text-2xl text-yellow-700 font-cursive">" </sub>{{item.comment}}<sub class="text-2xl text-yellow-700 font-cursive "> "</sub>
    </p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const items = ref([
  {
    name:'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  },
  {
    name: 'ajanaku johnson',
    image: "../assets/images/agent.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'frontend developer'
  }
]);

const slide = ref(0);
const slideWidth = ref(0);
let interval;

function startAutoSlide() {
  interval = setInterval(() => {
    slide.value = (slide.value + slideWidth.value) % (items.value.length - 9 * slideWidth.value );
  }, 3000);
}

onMounted(() => {
  slideWidth.value = document.querySelector('.slide').clientWidth;
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style>
.carousel {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.slide {
  padding: 10px;
  text-align: center;
  @apply flex flex-col justify-center
}
.slide img {
  max-width: 100%;
}
</style>
