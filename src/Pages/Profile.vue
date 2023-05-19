<template>
    <div
  :class="{overlay:isOpen}"
    @click="closeNav"
    v-if="isOpen"
    class="overlay bg-[#00000078] absolute h-[100%] w-[100%]"
  ></div>
  <body class="flex">
    <main class="flex h-[100vh] w-[100%]">
      <Nav
        :close="closeNav"
        :class="{ class: isOpen , class2:isclose}"
        class="hidde"
        :open="openNav"
      />

      <div class="submain flex flex-col w-[100%] px-[20px]">
        <div
          class="head rounded-tr-[20px] rounded-tl-[20px] filter w-[100%] relative h-[6vh] shadow-lg pr-[20px]"
        >
          <Head :pass="openNav" />
        </div>
        <body class="h-[100vh] overflow-y-scroll overflow-x-hidden">
          <ProfilePart/>
        </body>
      </div>
    </main>
  </body>
</template>

<script setup>
import Head from "@/components/Home/DashHead.vue";
import Nav from "@/components/Home/DashNav.vue";
// import Body from "@/components/Home/DashboardBody.vue";
import { ref } from "vue";
import ProfilePart from "../components/ProfilePart.vue";
const toggle = ref(false);
const isclose = ref(false);

const isOpen = ref(false);
const check = !toggle.value;
function openNav() {
  isOpen.value = !isOpen.value;
}

function closeNav() {
  isOpen.value = false
  isclose.value = true
}</script>