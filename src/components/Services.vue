<template>
   <section id="services">
        <div class="ser-con">
          <div class="ser-txt">
            <h1><span id="our">Our</span> Services</h1>
            <p>
              <a href="index.html">Gigvalley</a> is develop to solve customer's
              needs in terms of building, hosting and running responsive
              websites for every start-ups ventures.
            </p>
            <br />
            <p>
              The company comprises energetic and innovative designers and
              developers whose goal is to pursue a customer intimacy model. The
              pursuit of this specific business model will ensure complete
              satisfaction of our customers.
            </p>
            <br />
            <p>
              Our team understands that "no data no internet connection", hence,
              we offer instant on-the-spot execution of Data Bundles, Airtime
              Recharges and Cable Tv Subscription for web users.
            </p>
          </div>

          <div class="sevices-main">
            <div class="sub-main sub1">
              <i class="fa-solid fa-code fa-4x"></i>
              <h2>Website Development</h2>
              <p>
                Our team scales up by partnering with
                <a href="https://kinplusgroup.com/">Kinsplus Tech</a> to deliver
                iOS and Android Apps for your organization.
              </p>
            </div>
            <div class="sub-main">
              <i class="fa-solid fa-network-wired fa-4x"></i>
              <h2>Data/VTU Services</h2>
              <p>
                Via <a href="index.html">Gigvalley</a> platform, you can
                purchase cheap MTN, GLO,AIRTEL, 9MOBILE data and Airtime with
                just a click.
              </p>
            </div>
            <div class="sub-main">
              <i class="fa-sharp fa-solid fa-house-signal fa-4x"></i>
              <h2>Cable Subscription</h2>
              <p>
                Paying for your cable TV subscription ( DSTV, GOTV, STARTIMES)
                is always easy via our platform.
              </p>
            </div>
            <div class="sub-main">
              <i class="fa-solid fa-address-card fa-4x"></i>
              <h2>Online Registration</h2>
              <p>
                E-registration is flexible with GIGvalley. Give us a call, Send
                your details and your registration is submitted with a click.
              </p>
            </div>
          </div>
        </div>
      </section>
</template>

<style scoped>
#services {
  color: var(--primary-color);
  display: flex;
  padding: 2em 1em;
  background-color: #fcf0ffb0;
  background-image: url(@/assets/images/Nav-Logo.png);
  background-repeat: no-repeat;
  background-blend-mode: lighten;
  background-size: contain;
  background-position: -60px;
  /* margin-bottom: 30vh; */
}
.ser-txt {
  width: 40%;
}
.lorem-text {
  font-size: clamp(0.6em, 1.5vw, 8em);
  margin-top: 20px;
}
.ser-txt h1 {
  font-size: 3em;
  font-weight: bold;
  color: black;
}
.ser-txt p {
  text-align: center;
  color: black;
  font-size: 1.2em;
  line-height: 2;
  text-align: left;
}
#our {
  border-bottom: 2px solid purple;
}
.ser-con {
  color: var(--primary-color);
  font-weight: 100;
  font-size: 13px;
  text-align: left;
  display: flex;
  /* gap: 10em; */
  justify-content: space-between;
}
.sevices-main {
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  place-items: center;
}
.sub-main {
  padding: 3.5em;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 0.5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.301);
  text-align: center;
}
.sub-main:hover {
  transform: scale(1.05);
  transition: 0.5s;
}

.sub1 {
  margin-top: 2em;
}
@media (max-width: 927px) {
  .ser-con {
    flex-direction: column;
    text-align: left;
  }
  .ser-con p {
    font-weight: 300;
  }
  .sevices-main {
    width: 100%;
  }
  .ser-txt {
    width: 100%;
  }
  .sub1 {
    margin-top: 0em;
  }
}
@media (max-width: 494px) {
  .lorem-text {
    font-size: (0.6em, 1.5vw, 8em);
    margin-top: 3px;
  }
.sub-main {
    padding: 1.5em;
  }
}
@media (max-width: 437px) {
.sevices-main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    place-items: center;
  }
}
</style>