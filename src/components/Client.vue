<template>
  <h1 class="mt-16 mb-4 text-2xl font-medium text-center">What Our <span>Clients</span> Are Saying</h1>
  <div class="relative carousel">
    <div class="absolute inset-0 flex slider " :style="{ transform: `translateX(-${slide}px)` }">
      <div class="slide flex-shrink-0 my-1 mr-[25px] bg-[#eee] rounded-xl shadow xs:w-[320px] sm:w-[390px] w-[395px]" v-for="(item, index) in items" :key="index">
       <div class="flex gap-1">
         <img :src="item.image"  class="border border-white rounded-full w-28 h-28 sm:w-28 sm:h-28 xs:w-20 xs:h-20" alt="customer image">
         <!-- <img src="../assets/images/agent.png" class="w-32 h-32 sm:w-28 sm:h-28 xs:w-20 xs:h-20" alt=""> -->
       <div class="flex flex-col justify-center text-left">
        <h3 class="text-lg font-medium capitalize">{{ item.name }}</h3>
        <h4 class="text-sm font-medium capitalize opacity-60">{{ item.about }}</h4>
        <div class="flex gap-1">
          <svg class="w-6 h-6 p-1 text-yellow-600 bg-[#eee] rounded-full" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-yellow-600 bg-[#eee] rounded-full" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-yellow-600 bg-[#eee] rounded-full" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-yellow-600 bg-[#eee] rounded-full" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
          <svg class="w-6 h-6 p-1 text-yellow-600 bg-[#eee] rounded-full" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
        </div>
      </div>
      
    </div>
    <p class="text-2xl">
      <sub class="text-2xl text-yellow-700 sm:text-xl xs:text-lg font-cursive">" </sub>{{item.comment}}<sub class="text-2xl text-yellow-700 font-cursive "> "</sub>
    </p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const items = ref([
  {
    name:'charles Johnson',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683211052/IMG_20210606_142505_781-removebg-preview_c16zvz.png",
    comment:'We are so happy with gigvalley. Not only did they provide us with a service we can count on, they reduce cost.',
    about:'Artist'
  },
  {
    name: 'Aduroja M.O',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683213853/IMG_20210701_081246_436_c3kwyu.jpg",
    comment:'Gigvalley data is plans are cheap, they deliver ASAP. They a simply amazing.',
    about:'Teacher'
  },
  {
    name: 'Rabiu Emmanuel',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683211029/IMG_20230402_134034_488-removebg-preview_1_rerqkk.png",
    comment:'5 stars gigvalley has become our go-to exhibition partner, they save me hassle and stress',
    about:'Building Contractor'
  },
  {
    name: 'Olanrewaju Olayinka',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683210269/sd_lrzhde.jpg",
    comment:'Getting in touch with my Customers and  families has been easy, they are reliable.',
    about:' Cadiothorasic Nurse'
  },
  {
    name: 'Paul Busuyi',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683209386/IMG_20200105_122206-removebg-preview_ehkj24.png",
    comment:'This is super efficient and helpful, I can trust them.',
    about:'Engineer'
  },
  {
    name: 'Miss Bunmilola',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683212072/IMG_20200302_072201_2_upalfk.jpg",
    comment:'My fear of losing money when funding my wallet is gone, they are well optimized.',
    about:'Student'
  },
  {
    name: 'Akinwunmi Funke',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683211327/IMG-20230423-WA0005_1_dugsgw.jpg",
    comment:'When it comes to delivering Swift data, I Subcribe to Gigvalley!',
    about:'Banker'
  },
  {
    name: 'Olabode Paul',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683211937/IMG_20220102_121015_511_tqlxw5.jpg",
    comment:'They are available 24/7/365 on their Customer support.',
    about:'Mathematician'
  },
  {
    name: 'Ojo Olalekan',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683212223/Screenshot_20211106-221110_xwyqa1.png",
    comment:'Our team scaled up with gigvalley, they will take your online presence to the next level.',
    about:'CEO Sammy Computers'
  },
  {
    name: 'Rosemary',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683212805/Screenshot_20220115-220607_iixayt_jtxzym.jpg",
    comment:'They are really good at focussing on what the Customers want.',
    about:'Ex-corper'
  },
  {
    name: 'O.J Olutayo',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683212735/Screenshot_20210722-095632_z9eoti.png",
    comment:'Gigvalley Platform is 100% transparent amnd committed to outstanding customer service',
    about:'Businessman'
  },
  {
    name: 'Vincent Fakiyesi ',
    image: "https://res.cloudinary.com/dvqmqfmqw/image/upload/v1683212561/Screenshot_20211217-231838_wleo0m.png",
    comment:'They do not manipulate or unduly influential when customers is trying to purchase a product',
    about:'Engineer'
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
