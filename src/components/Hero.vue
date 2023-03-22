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
            <button class="buy">Get Started</button>
            <button class="learn">Explore</button>
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

</style>