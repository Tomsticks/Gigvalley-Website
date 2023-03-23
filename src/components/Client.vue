<template>
    <!-- ===========CUSTOMER========= -->
    <section id="client">
        <h1>What Our <span>Clients</span> Are Saying</h1>
        <div class="customer-comment_con">
          <div class="move-container">
            <div class="move-wrapper">
              <div class="customer-1">
                <div class="custormers-head">
                  <img
                    src="@/assets/images/agent.png"
                    alt="Customer Testimony for gigvalley data plan"
                  />
                  <h3>James Ngozie</h3>
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <p>
                  " We are so happy with Gigvalley. Not only did they provide us
                  with a service we can count on, they reduced our cost".
                </p>
              </div>
              <div class="customer-1">
                <div class="custormers-head">
                  <img
                    src="@/assets/images/agent.png"
                    alt="Gigvalley data plan customer's view"
                  />
                  <h3>Mary Famuagun</h3>
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <p>
                  " GIGvalley Data plans are cheap they deliver ASAP. They are
                  simply amazing ".
                </p>
              </div>
              <div class="customer-1">
                <div class="custormers-head">
                  <img
                    src="@/assets/images/agent.png"
                    alt="customer's product's testimonials"
                  />
                  <h3>John Moh</h3>
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <p>
                  "This is SUPER efficient and Helpful. They solve my data and
                  VTU problems ".
                </p>
              </div>
         
              <div class="customer-1">
                <div class="custormers-head">
                  <img
                    src="@/assets/images/agent.png"
                    alt="developer's Testimony"
                  />
                  <h3>Miracle Olaniyan</h3>
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <p>
                  "Getting in touch with families has been easy and amazing with
                  this platform, Gigvalley data plans are reliable and
                  dependable. I trust their services".
                </p>
              </div>
              <div class="customer-1">
                <div class="custormers-head">
                  <img src="@/assets/images/agent.png" alt="" />
                  <h3>Tope Osunrayi</h3>
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <p>
                  " My fear of losing money when funding my wallet is gone, they
                  are well optimized".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<style scoped>
.curstomers {
  display: flex;
  justify-content: center;
}
#client {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin: 0 auto;
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
  55% {
    transform: translateX(-150%);
  }
  75% {
    transform: translateX(-160%);
  }
  80% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.col-lg-3 {
  text-align: left;
}
.customer-comment_con::-webkit-scrollbar {
  width: 12px;
  background-color: white;
  display: none;
}

.customer-comment_con::-webkit-scrollbar-track {
  background-color: white;
  display: none;
}

.customer-comment_con::-webkit-scrollbar-thumb {
  background: none;
  border-radius: 50px;
  position: absolute;
  display: none;
}

.customer-comment_con::-webkit-scrollbar-thumb:hover {
  display: none;
  background: none;
}
.customer-comment_con {
  display: flex;
  gap: 10px;
  width: 100%;
  overflow: scroll;
  /* padding: 10vh; */
}
.customer-1 {
  height: 40vh;
  min-width: 50vh;
  border-radius: 20px;
  box-shadow: 1px 0px 7px 2px rgba(18, 17, 17, 0.25);
  -webkit-box-shadow: 1px 0px 7px 2px rgba(18, 17, 17, 0.25);
  -moz-box-shadow: 1px 0px 7px 2px rgba(18, 17, 17, 0.25);
  padding: 20px;
}
.customer-1 img {
  border-radius: 100%;
  width: 70px;
  height: 70px;
}
.custormers-head {
  display: grid;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  grid-template-columns: 30% 70%;
}

/* .customer-1 p{
} */

div.stars {
  position: absolute;
  top: 5em;
  padding-left: 100px;
  display: none;
}

.custormers-head h3 {
  font-size: 20px;
  font-weight: bold;
}

#client h1 {
  text-align: center;
  margin-top: 10vh;
  font-size: 1.4em;
  font-weight: bold;
}
#client h1 span {
  border-bottom: 3px solid var(--primary-color);
}

.move-container {
  width: 100%;
  overflow: scroll;
  border-radius: 5px;
}

.move-container::-webkit-scrollbar-button {
  color: transparent;
  background-color: transparent;
  width: 1px;
  display: none;
}
.move-container::-webkit-scrollbar-track {
  color: transparent;
  background-color: transparent;
  width: 1px;
  display: none;
}
.move-container::-webkit-scrollbar-thumb {
  color: transparent;
  background-color: transparent;
  width: 1px;
  display: none;
}
.move-container::-webkit-scrollbar-track-piece {
  color: transparent;
  background-color: transparent;
  width: 1px;
  display: none;
}

.move-wrapper {
  width: 100%;
  display: flex;
  gap: 10px;
  animation: slide 20s infinite linear alternate;
  padding: 10px;
}
</style>