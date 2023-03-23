<template>
<!-- =======================OUR APP====================== -->
<section id="APP">
            <div class="app-main">
            <div class="app-txt">
                <h1><span>Download</span>  our App</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    labore architecto mollitia repellendus facere sint? Vel repellat cum nam dolore accusamus? <br> <br>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus omnis vel dignissimos 
                        tempore eveniet soluta cumque eum, veniam necessitatibus! Explicabo modi consectetur alias iure dolore.</p>
                </p>
                <div class="app-store">
                    <img src="@/assets/images/google_play_store-removebg-preview.png" alt="Play Store">
                    <img src="@/assets/images/apple_store_img_3-removebg-preview.png" alt="App Store">
                </div>
            </div>
            <div class="app-img">
            <img src="@/assets/images/Gig Valley Mockup 3.png" alt="data reselling app logo">
        </div>
    </div>
           </section>
           
</template>

<style scoped>

#APP {
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.stars {
  display: flex;
  gap: 5px;
}

.stars i {
  color: gold;
}

.app-main {
  display: flex;
  color: white;
  line-height: 2;
  justify-content: space-between;
  height: 80vh;
  padding: 0 20px;
}
#APP h1 {
  font-size: 3em;
  font-weight: bold;
}
#APP h1 span {
  border-bottom: 3px solid var(--secondary-color);
  width: 0.1em;
}
.app-txt {
  width: 100%;
}
.app-img {
  width: 50%;
}

.app-img img {
  width: 50%;
}

.app-store {
  display: flex;
  gap: 3em;
  width: 100%;
  align-items: center;
}
.app-store img {
  width: 20%;
}
.app-store img:last-child {
  height: 10%;
}</style>