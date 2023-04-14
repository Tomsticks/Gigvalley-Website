<template>
 <section id="Hero">
        <div class="hero-txt1">
          <h1>
            Low-priced <span class="type"></span> <br />
            is What We give!
          </h1>
          <p class="lorem-text hero-lorem">
            A no-frills 24/7/365 day per year Airtime Recharge l Data Bundles l
            Cable Tv Subscription tailored for YOU.
          </p>
          <div class="hero-btn">
            <button @click="getStarted" class="buy">Get Started</button>
            <button @click="forNow"  class="learn">Explore</button>
          </div>
        </div>

        <div class="worked-pics">
          <img
            src="@/assets/images/heroImg.jpg"
            alt="data plan images logo"
            class="photoshop-edit"
          />
        </div>
      </section>
</template>

<script setup>

import {useRouter} from 'vue-router'
const router = useRouter()

function getStarted(){
  router.push('/register')
}

function forNow(){
  router.push('/dashboard')
}
</script>

<style scoped>
#Hero {
  display: flex;
}

.worked-pics {
  width: 50%;
  padding: 10px;
  /* border: 2px solid red;  */
}
.photoshop-edit {
  width: 100%;
}

.hero-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
  width: 80%;
  margin-top: 3em;
}
.buy:hover {
  cursor: pointer;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  transition: 0.5s;
  border: 1px solid var(--primary-color);
}
.buy {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  width: 40%;
  padding: 10px 0;
  font-size: clamp(2px, 2vw, 15px);
  outline: none;
}
.learn {
  background-color: var(--secondary-color);
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  width: 40%;
  padding: 10px 0;
  font-size: clamp(2px, 2vw, 15px);
}
.learn:hover {
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  transition: 0.5s;
}
.hero-btn button {
  border-radius: 7px;
}
.hero-txt1 {
  width: 50%;
  flex-direction: column;
}
.hero-txt1 h1 {
  font-weight: bolder;
  font-weight: 900;
  font-family: "inter";
  font-size: clamp(0.9em, 5vw, 30em);
}
.hero-txt1 span {
  color: var(--primary-color);
}

@media (max-width: 608px) {
  .hero-btn button {
    margin-top: 1.5em;
  }
.hero-btn {
    margin-top: 0;
  }
}
@media (max-width: 520px) {
  #Hero {
    display: block;
  }
  .hero-txt1 {
    width: 100%;
  }
  .worked-pics {
    width: 100%;
  }
.hero-btn {
    margin: 1em;
  }
  .hero-btn button {
    font-size: clamp(15px, 1vw, 10px);
  }
 .hero-txt1 h1 {
    font-weight: bolder;
    font-weight: 900;
    font-family: "inter";
    font-size: clamp(0.9em, 9vw, 30em);
  }
  .hero-lorem {
    font-size: clamp(0.6em, 3vw, 8em);
    /* color: red; */
  }
}
@media (max-width: 494px) {
.hero-btn button {
    margin-top: 0.5em;
  }
}
@media (max-width: 437px) {
  .hero-btn button {
    margin-bottom: 0.5em;
  }
}
@media (max-width: 395px) {
.worked-pics {
    padding: 3px;
  }
  .photoshop-edit {
    height: 100%;
  }
  .hero-btn {
    display: flex;
    gap: 0.3em;
  }
  .hero-btn button {
    width: 50%;
  }
}

@media (max-width: 344px) {
  .hero-btn button {
    width: 50%;
    padding: 5px;
  }
}
</style>