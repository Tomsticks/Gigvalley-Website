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
</style>