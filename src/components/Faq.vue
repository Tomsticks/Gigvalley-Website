<template>
   
   <!-- =======================FAQ============================= -->
   <section id="FAQ">
        <div class="faqImg">
          <img
            src="@/assets/images/FaqImg.png"
            alt=" frequently asked questions in data plans"
          />
        </div>
        <div class="Faq">
          <h2>FAQ</h2>
          <div class="question-zone">
            <div v-for="items in data" :key="id" class="accordion" @click="items.open = item">
              <div   class="accordion__question">
                <p >{{ items.que }}<i class="fa-solid fa-plus"></i></p>
              </div>
              <div class="accordion__answer">
                <p v-show="items.open" class="ptag-move"> {{ items.ans}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>
const data = [
  {
que:"How Do I check my Data Balance?",
ans:"You can check your data balance on MTN SME by dialing *461*4# and use *131*4# or *460*260# for MTN Gifting.",
open:false
},
  {
que:"How Do I check my Data Balance?",
ans:"You can check your data balance on MTN SME by dialing *461*4# and use *131*4# or *460*260# for MTN Gifting.",
open:false
},
  {
que:"How Do I check my Data Balance?",
ans:"You can check your data balance on MTN SME by dialing *461*4# and use *131*4# or *460*260# for MTN Gifting.",
open:false
},
  {
que:"How Do I check my Data Balance?",
ans:"You can check your data balance on MTN SME by dialing *461*4# and use *131*4# or *460*260# for MTN Gifting.",
open:false
},
  {
que:"How Do I check my Data Balance?",
ans:"You can check your data balance on MTN SME by dialing *461*4# and use *131*4# or *460*260# for MTN Gifting.",
open:false
},

]


let item = data.forEach(item =>{
})
</script>
<style scoped>

/* #FAQ {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faqImg {
  width: 100%;
}

.faqImg img {
  height: 100vh;
  width: 100%;
}
.Faq {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 3em;
  gap: 1.5em;
  width: 100%;
}
.Faq h2 {
  font-size: 30px;
  border-bottom: 3px solid var(--primary-color);
  width: 1.5em;
  font-weight: bold;
}

.Faq .question-zone p {
  border-bottom: 1px solid black;
  justify-content: space-between;
  font-weight: bold;
}
.none {
  display: none;
}

.class {
  transform: rotate(-50deg);
  transition: 0.5s;
}

.question-zone {
  min-height: 70vh;
}
.accordion {
  padding: 20px;
}
.accordion__question p {
  font-family: "inter", sans-serif;
  display: flex;
}
.ptag-move {
  font-family: "inter", sans-serif;
  font-size: 12px;
} */

/* @keyframes moveDown {
  0% {
    opacity: 0;
    top: -10px;
  }
  30% {
    opacity: 0.3;
  }
  750% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
@keyframes moveUp {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
} */

</style>