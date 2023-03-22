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
            <div class="accordion">
              <div class="accordion__question">
                <p>
                  How Do I check my Data Balance?
                  <i class="fa-solid fa-plus"></i>
                </p>
              </div>
              <div class="accordion__answer">
                <p class="ptag-move">
                  You can check your data balance on MTN SME by dialing *461*4#
                  and use *131*4# or *460*260# for MTN Gifting.
                </p>
                <p class="ptag-move">
                  Airtel Data plans can be checked by dialing *140#, simply dial
                  *127*0# on GLO to check your balance.
                </p>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion__question">
                <p>How do I fund my wallet? <i class="fa-solid fa-plus"></i></p>
              </div>
              <div class="accordion__answer">
                <p class="ptag-move">
                  Our team has designed secured platforms through with you can
                  fund your wallet, Kindly proceed through ATM card, Bank
                  Deposit, mobile transfer and paystack
                </p>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion__question">
                <p>
                  Can I share Data on MTN/AIrtel/GLO?
                  <i class="fa-solid fa-plus"></i>
                </p>
              </div>
              <div class="accordion__answer">
                <p class="ptag-move">
                  Yes, Data Bundles cann be shared with families and friend
                </p>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion__question">
                <p>
                  Can I become a data reseller agent?
                  <i class="fa-solid fa-plus"></i>
                </p>
              </div>
              <div class="accordion__answer">
                <p class="ptag-move">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, eveniet perferendis saepe repellat commodi soluta
                  inventore earum magni sunt cum.
                </p>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion__question">
                <p>
                  How much will it cost me to design a data reselling website?
                  <i class="fa-solid fa-plus"></i>
                </p>
              </div>
              <div class="accordion__answer">
                <p class="ptag-move">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, eveniet perferendis saepe repellat commodi soluta
                  inventore earum magni sunt cum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<style scoped>
/* ==========================FAQ======================= */

#FAQ {
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
</style>