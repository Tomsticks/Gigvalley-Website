<template>
    <div class="flex sm:flex-col  justify-center sm:gap-2 gap-4 h-[90vh] items-center relative">
        <div class="flex sm:w-[80%] sm:h-[50%] items-center sm:gap-1 gap-2 w-[40%] h-[100%]">
            <img class="border-2 rounded sm:w-[100%] sm:h-[100%] w-[70%] h-[70%] border-primary " src="../assets/images/Screenshot_20230204-055555 (2).png" alt="">
            <!-- <div>
                <p>profile details</p>
                <p>3320783522</p>
            </div> -->
        </div>
        <div class="flex flex-col gap-4  ">
            <div class="flex gap-2 items-center">
                <p class="show">name</p><span>olowe peter</span>
            </div>
            <div class="flex gap-2 items-center">
                <p class="show">gender</p><span>male</span>
            </div>
            <div class="flex gap-2 items-center">
                <p class="show">age</p><span>201yrs</span>
            </div>
            <div class="flex gap-2 items-center">
                <p class="show">phone number</p><span>07035137761</span>
            </div>
        </div>
        <button class="text-white bg-black rounded sm:p-1 sm:right-2 p-2 absolute right-4 bottom-0 ">edit</button>
    </div>
</template>
<style scoped>
.show{
    @apply text-xl text-black font-medium uppercase sm:text-lg sm:capitalize
}
.show::after{
    content: ":";
}
span{
    @apply capitalize text-[#000000d2] text-lg font-medium sm:text-sm

}
</style>

<script setup>

</script>