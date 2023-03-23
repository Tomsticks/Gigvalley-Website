<template>
  <nav id="nav">
        <div class="nav-img">
          <img src="@/assets/images/Nav-Logo.png" alt="GigValley Logo" />
        </div>
        <a href="#test">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#services">Service</a>
        <div class="market">
          <a href="#">Market Place<i class="fa-solid fa-chevron-down"></i></a>
          <div class="div">
            <a href="">Buy Data</a>
            <a href="">Buy Airtime</a>
            <a href="">Cable Subscription</a>
            <a href="">Electricity Bill</a>
          </div>
        </div>
        <button class="buy-data">Signin</button>
      </nav>
</template>
<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  margin-top: 2em;
  box-shadow: 0 0 5px 0 rgba(112, 0, 143, 0.336);
  padding: 0 1.5em;
  width: 100%;
}
nav .nav-img img {
  height: 9em;
}

nav a {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #999;
  position: relative;
}
nav button {
  background: var(--primary-color);
  padding: 0.9em 6em;
  border: none;
  border-radius: 0.5em;
  color: var(--secondary-color);
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .market a:first-child {
  display: flex;
  align-items: center;
  gap: 10px;
}
nav .market {
  position: relative;
}

.edit-me {
  height: 50mm;
}

.div {
  width: 15em;
  position: absolute;
  display: flex;
  flex-direction: column;
  display: none;
  background-color: var(--primary-color);
  gap: 10px;
  box-shadow: 3px 3px 10px 0 black;
  padding: 10px;
  transition: 2s ease-in-out;
}
.div a {
  color: var(--secondary-color);
  width: 100%;
  height: 2em;
}

.div a:hover {
  background-color: rgba(255, 255, 255, 0.397);
  color: var(--secondary-color);
  width: 100%;
  align-items: center;
}
.market a:hover + .div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.div:hover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>