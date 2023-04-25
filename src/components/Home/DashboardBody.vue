<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const balance = ref('3870.50')
const router = useRouter()
const name = ref('Tomzor!')
const openAccount = ref(false)
const bankName = ref('')
const accountNumber = ref('')



function MoneiPoint() {
    openAccount.value = true
    bankName.value = 'MoniePoint'
    accountNumber.value = 9035783851
}
function Providus() {
    openAccount.value = true
    bankName.value = 'Providus Bank'
    accountNumber.value = 3320783522
}

function closeAccountNumber() {
    openAccount.value = false
}

function fund() {
    router.push('/Fund')
}







</script> 

<template >
    <div v-if="openAccount"
        class="overlay_Body bg-[#0000004f] absolute left-0 top-0 w-[100%] h-[100vh] flex items-center justify-center  ">
        <div class="over  bg-[white] h-[] py-[30px] px-[50px] rounded-[2px] sm:px-[20px] md:w-[300px]  ">
            <span @click="closeAccountNumber" class="cursor-pointer flex justify-end">Close</span>
            <div class="overlay_Content sm:text-[13px] ">
                <p class="text-[25px] md:text-[10px] "> Automated Bank Transfer</p>
                <!-- MAKE A TRANSFER TO THIS UNIQUE ACCOUNT NUMBER GIVEN TO YOU AND YOUR WALLET WILL BE CREDITED IMEDIATELY-->

                <h2 class="font-bold md:text-[10px]">BANK NAME: {{ bankName }}</h2>
                <h3 class="text-[20px] md:text-[10px] ">ACCOUNT NAME: <span class="font-bold text-primary text-[20px] md:text-[15px]">GigValley -
                        Toluwani{{ }}</span></h3>
                <h3 class="text-[20px] md:text-[10px] ">ACCOUNT NUMBER: <span class="text-primary font-bold text-[25px] md:text-[15px]"> {{ accountNumber
                }}</span></h3>
                <p>CHARGES: 25 NAIRA</p>
            </div>
        </div>

    </div>

    <section @click="check"
        class="top flex justify-between w-[80%] mt-[4vh] mb-[5vh] rounded-[20px] py-[20px] px-[20px]  lg:w-[90%] sm:w-[100%] "
        id="greetings-section">
        <div class="hero-text w-[50%] sm:w-[100%]">
            <h1 class="text-[40px] text-[white] font-extrabold font-[Raleway] lg:text-[40px] sm:text-[25px] ">Welcome Back,
                <br> {{ name }}
            </h1>
            <p class="w-[90%] text-[15px] mt-[2vh] text-[white] sm:text-[20px] ">Your Account Has Been Verified Successfully
            </p>
            <h3 class="mt-[20px] text-[15px]  text-[#43e975] sm:text-[11px]">MAKE A TRANSFER TO THIS UNIQUE ACCOUNT NUMBER
                GIVEN TO YOU AND
                YOUR WALLET WILL BE CREDITED IMEDIATELY.</h3>
        </div>


        <div class="hero-img w-[50%] flex  justify-center items-center sm:hidden">
            <img class="w-[50%] lg:w-[40%]  " src="./HomeImages/BodyAvatar.png" alt="">
        </div>
    </section>
 
    <section id="Banks" class="flex gap-[20px]">
        <div @click="MoneiPoint"
            class="Money_Point flex items-center shadow-xl px-[10px] rounded-lg cursor-pointer sm:text-[10px]">
            <img class="h-[7vh]" src="./HomeImages/MoniPoint-removebg-preview.png" alt="">
            <p>Money point</p>
        </div>
        <div @click="Providus"
            class="Money_Point flex items-center shadow-xl px-[10px] rounded-lg cursor-pointer sm:text-[10px]">
            <img class="h-[7vh]" src="./HomeImages/ProvidusBank-removebg-preview.png" alt="">
            <p>Providus Bank</p>
        </div>

    </section>

    <section class="flex mt-[30px] mx[20px] rounded-[10px] px-[20px] shadow-xl sm:w-[100%] sm: ">
        <div class="account_info   flex w-[100%] justify-between item-center py-[10px] sm:py-[2px]">
            <div class="Money sm:text-[10px] ">
                <p class="flex items-center  gap-2 ">Total Balance <i class="fa-solid fa-eye mt-[8px]"></i> </p>
                <div class="balance">
                    <span class="text-[20px] font-bold sm:text-[10px]"> &#8358{{ balance }}</span>
                </div>
            </div>
            <button @click="fund" class="py-[10px] px-[25px] text-[20px] flex rounded-[50px]  bg-primary text-white  sm:justify-center sm:px-[10px] sm:rounded-[10px] sm:text-[10px]  ">Fund
                Wallet</button>
        </div>
    </section>

    <section class="mt-[30px] w-[100%] items-center justify-center" id="services ">
        <h1 class="text-[40px] font-bold text-primary sm:text-[20px]">Our Avaliable Services</h1>
        <div
            class="allServices border bg-[#F1F1F1] md:grid-cols-2 grid grid-cols-4 sm:grid-cols-2  gap-[20px] py-[30px] px-[20px] rounded-[5px] ">
            <!-- EACH -->
            <div @click="router.push('/buyAirtime')" class="Buy_Airtime service flex flex-col md:h-[20vh] ">
                <div class="image items-center xs:h-[10vh]">
                    <img class="w-[100%] h-[20vh] md:h-[10vh] xs:h-[7vh] " src="../Home/HomeImages/Airtime.png" alt="">
                </div>
                <p class="xs:text-[10px]">Airtime</p>

            </div>
            <div class="Buy_Data service flex flex-col md:h-[20vh] ">
                <div class="image items-center xs:h-[10vh]">
                    <img class="w-[100%] h-[20vh] md:h-[10vh] xs:h-[7vh] " src="../Home/HomeImages/Data.png" alt="">
                </div>
                <p class="xs:text-[10px]">Buy Data</p>
            </div>

            <div class="Airtime_ToCash service  flex flex-col md:h-[20vh]  ">

                <div class="image items-center">
                    <img class="w-[100%] h-[20vh] md:h-[10vh] xs:h-[7vh] " src="../Home/HomeImages/AirCash.png" alt="">
                </div>
                <p class=" xs:text-[10px] ">Convert Airtime to Cash</p>

            </div>

            <div class="webDev service flex flex-col md:h-[20vh] ">
                <div class="image items-center xs:h-[10vh]">
                    <img class="w-[100%] h-[20vh] md:h-[10vh] xs:h-[7vh] " src="../Home/HomeImages/WebDev.png" alt="">
                </div>
                <p class="xs:text-[10px]">Website Development</p>

            </div>

        </div>
    </section>
</template>
<style>
/* .allServices {

} */



.top {
    background-image: url(../Home/HomeImages/Background.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.over {
    -webkit-animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 2.000) both;
    animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 2.000) both;

}

@-webkit-keyframes scale-up-ver-center {
    0% {
        -webkit-transform: scaleY(0.4);
        transform: scaleY(0.4);
    }

    100% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
}

@keyframes scale-up-ver-center {
    0% {
        -webkit-transform: scaleY(0.6);
        transform: scaleY(0.6);
    }

    100% {
        -webkit-transform: scaleY(1.1);
        transform: scaleY(1.1);
    }
}</style>

