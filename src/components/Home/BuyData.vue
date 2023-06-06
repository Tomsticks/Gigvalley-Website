<template>
  <form class="font-mono">
    <div class="w-[100%] bg-[#ddd]">
      <div
        class="flex items-center justify-center p-[2px] mt-[40px] mb-[20px] capitalize text-white bg-primary h-[30px] gap-[2px]"
      >
        <div class="w-[10px] h-[10px] rounded-full bg-white"></div>
        <p>buy data</p>
        <div class="w-[10px] h-[10px] rounded-full bg-white"></div>
      </div>
      <div class="flex p-[0 10px] justify-between mb-[3px]">
        <p
          class="bg-primary text-white p-[7px] text-[18px] capitalize rounded-[3px] ml-[10px] font-semibold"
        >
          balance: &#8358;0
        </p>
        <button
          class="bg-primary text-white p-[7px] border-none rounded-[3px] capitalize text-[18px] mr-[10px] font-semibold"
        >
          fund wallet
        </button>
      </div>
      <form class="pr-[10px] pl-[10px]">
        <fieldset
          class="p-[10px] m-[0 10px] border border-black border-opacity-30"
        >
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="data-type"
              >data type</label
            >
            <select
              name=" data-type"
              id="data-type"
              class="h-[35px] pl-[10px] text-[16px] border border-black border-opacity-30 hover:border-opacity-80"
            >
              <option value="" required disabled selected hidden>
                --select--
              </option>
              <option value="SME">SME</option>
              <option value="VTU">VTU</option>
              <option value="GIFTING">GIFTING</option>
            </select>
          </div>
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="network"
              >network</label
            >
            <select
              v-model="selectedValue"
              name="network"
              class="h-[35px] pl-[10px] text-[16px] border border-black border-opacity-30 hover:border-opacity-80"
              id="network"
            >
            
              <option value="" required disabled selected hidden>
                --select--
              </option>
              <option  value="Mtn">MTN</option>
              <option value="Glo">GLO</option>
              <option value="Airtel">AIRTEL</option>
            </select>
            <!-- {{selectedValue}} -->
          </div>
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="phone"
              >phone</label
            >
            <input
              placeholder="enter phone number"
              type="text"
              id="phone"
              class="h-[35px] border border-black border-opacity-30 hover:border-opacity-80 placeholder:text-[#dde] placeholder:pl-[10px] placeholder:text-[20px]"
              name="phone"
              maxlength="11"
            />
          </div>

          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="original"
              >original amount</label
            >
            <div
              class="flex flex-row items-center justify-center border border-black border-opacity-30 hover:border-opacity-80"
            >
              <p
                class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]"
              >
                NGN
              </p>
              <input
                placeholder="Amount"
                type="text"
                id="original"
                class="h-[35px] bg-[#bbb] w-[90%] border-none outline-[rgba(0,0,0,0.575)] outline-0 placeholder:text-[#dde] placeholder:pl-[10px] placeholder:text-[20px]"
                name="original"
                v-model="userPhoneNumber"
                maxlength="11"
              />
              <p
                class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]"
              >
                .00
              </p>
            </div>
          </div>
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="amount-to-pay"
              >amount to pay</label
            >
            <div
              class="flex flex-row items-center justify-center border border-black border-opacity-30 hover:border-opacity-80"
            >
              <p
                class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]"
              >
                NGN
              </p>
              <input
                placeholder="Amount"
                type="number"
                id="amount-to-pay"
                class="h-[35px] bg-[#bbb] w-[90%] border-none outline-[rgba(0,0,0,0.575)] outline-0 placeholder:text-[#dde] placeholder:pl-[10px] placeholder:text-[20px]"
                name="amount-to-pay"
              />
              <p
                class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]"
              >
                .00
              </p>
            </div>
          </div>

          <button
            @click="submit"
            class="text-[#FFF] bg-primary rounded-[10px]w-[100%] p-[5px] text-[20px] capitalize text-center rounded-full"
          >
            purchase
          </button>
        </fieldset>
      </form>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
const userPhoneNumber = ref("");
const PhoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
// function submit(params) {
//   console.log(userPhoneNumber.value);

// }
const selectedValue = ref("");

function onSelectChange(e){
  selectedValue.value = e.target.value;
console.log(selectedValue.value);
 
};
</script>
