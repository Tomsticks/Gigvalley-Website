<template >
  <div class="font-mono">
    <div class="w-[75%] bg-[#ddd]">
      <div class="flex items-center justify-center p-[2px] mt-[40px] mb-[20px] capitalize text-white bg-primary h-[30px] gap-[2px] relative">
        <div class="w-[10px] h-[10px] rounded-full bg-white"></div>
        <p>buy airtime</p>
        <div class="w-[10px] h-[10px] rounded-full bg-white"></div>
      </div>
      <div class="flex p-[0 10px] justify-between mb-[3px]">
        <p class="bg-primary text-white p-[7px] text-[18px] capitalize rounded-[3px] ml-[10px] font-semibold">balance: &#8358;0</p>
        <button class="bg-primary text-white p-[7px] border-none rounded-[3px] capitalize text-[18px] mr-[10px] font-semibold">fund wallet</button>
      </div>
      <form class="pr-[10px] pl-[10px]">
        <fieldset class="p-[10px] m-[0 10px] border border-black border-opacity-30">
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="data-type">airtime type</label>
            <select name=" data-type" id="data-type" class="h-[35px] pl-[10px] text-[16px] border border-black border-opacity-30 hover:border-opacity-80">
              <option value="" required disabled selected hidden>
                --select--
              </option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
            </select>
          </div>
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="network">network</label>
            <select name="network" class="h-[35px] pl-[10px] text-[16px] border border-black border-opacity-30 hover:border-opacity-80" id="network">
              <option value="" required disabled selected hidden>
                --select--
              </option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
              <option value="">temmie smiless</option>
            </select>
          </div>
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize  mb-[20px] text-[20px]" for="phone">phone</label>
            <input
              placeholder="enter phone number"
              type="number"
              id="phone"
              class="h-[35px] border border-black border-opacity-30 hover:border-opacity-80 placeholder:text-[#aaa] placeholder:pl-[10px] placeholder:text-[20px]"
              name="phone"
            />
          </div>
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="original">original amount</label>
            <div class="flex flex-row items-center justify-center border border-black border-opacity-30 hover:border-opacity-80">
              <p class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]">NGN</p>
              <input
                placeholder=".0"
                type="number"
                id="original"
                class="h-[35px] bg-[#bbb] w-[90%] border-none outline-[rgba(0,0,0,0.575)] outline-0 placeholder:text-[#dde] placeholder:pl-[10px] placeholder:text-[20px]"
                name="original"
              />
              <p class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]">.00</p>
            </div>
          </div>
          <div class="mb-[20px] flex flex-col">
            <label class="capitalize mb-[20px] text-[20px]" for="amount-to-pay">amount to pay</label>
            <div class="flex flex-row items-center justify-center border border-black border-opacity-30 hover:border-opacity-80">
              <p class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]">NGN</p>
              <input
                placeholder="Amount"
                type="number"
                id="amount-to-pay"
                class="h-[35px] bg-[#bbb] w-[90%] border-none outline-[rgba(0,0,0,0.575)] outline-0 placeholder:text-[#dde] placeholder:pl-[10px] placeholder:text-[20px]"
                name="amount-to-pay"
              />
              <p class="w-[5%] bg-[#bbb] h-[35px] text-[20px] pt-[5px] pb-[5px] pr-[5px]">.00</p>
            </div>
          </div>
          <div class="flex flex-row items-center gap-[5px] mt-2">
            <input
              placeholder=""
              type="checkbox"
              name="check"
              id="check"
              class=" h-[35px]"
            />
            <label class="capitalize mb-[0px] text-[20px]" for="check">bypass number validator</label>
          </div>
          <p class="text-[#FFF] bg-primary rounded-[10px]w-[100%] p-[5px] text-[20px] capitalize text-center rounded-full">purchase</p>
        </fieldset>
      </form>
    
    </div>
  </div>
</template>

<style>


</style>