<template>
    <section id="about-us">
        <p class="abt-tlt">Why <span id="our">Choose</span> Us</p>
        <div class="aboutMain-con">
          <div class="abt-con">
            <img
              src="@/assets/images/shield-removebg-preview.png"
              alt="trusted logo picture"
            />
            <h2>Trustworthy</h2>
            <p>
              GIGvalley platform is securely optimized, this makes our services
              dependable, well grounded for individuals, businesses and
              corporate organizations.
            </p>
          </div>
          <div class="abt-con">
            <img
              src="@/assets/images/clock-removebg-preview.png"
              alt="data Availability image"
            />
            <h2>24/7 Availability</h2>
            <p>
              We are always ready to meet high expectations and quality
              standards. We are neither open nor close,we are always available
              for you.
            </p>
          </div>
          <div class="abt-con">
            <img
              src="@/assets/images/agent-removebg-preview.png"
              alt="custormer service provider image"
            />
            <h2>Customer Support</h2>
            <p>
              Our team has enough and well experienced expertise whose priority
              is to put our customers at the zenith. You speak, We listen and
              Act.
            </p>
          </div>
        </div>
      </section>
</template>

<style scoped>
#about-us {
  /* border: 1px solid red; */
  padding-bottom: 10em;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.abt-tlt {
  margin-top: 5vh;
  font-size: 25px;
  font-weight: 900;
  font-weight: bolder;
  text-align: center;
}
.aboutMain-con {
  display: flex;
  justify-content: space-around;
  width: 90%;
  padding: 30px 5em;
  /* box-shadow: 0 0 7px rgb(214, 212, 212);  */
  border-radius: 1em;
  margin-top: 2em;
}
.abt-con {
  height: 20em;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.6em;
  color: var(--primary-color);
  background-color: #fdf7ff;
  font-weight: bolder;
}
.abt-con:nth-child(1) {
  background-color: rgba(255, 192, 203, 0.062);
  box-shadow: 0 0 7px rgb(214, 212, 212);
}
.abt-con:nth-child(2) {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
.abt-con:nth-child(3) {
  background-color: rgba(255, 192, 203, 0.062);
  box-shadow: 0 0 7px rgb(214, 212, 212);
}
.abt-con img {
  height: 30%;
}
.abt-con h2 {
  margin-top: 2em;
}

.abt-con p {
  font-weight: 100;
  font-size: 13px;
  text-align: center;
  margin-top: 1em;
}
</style>