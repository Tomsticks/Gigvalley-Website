<template>
 <main class="px-8 flex flex-col">
  <Nav/>
  <Hero/>
<Testimoies/>
<About/>
<Services/>
<Custormers/>
<Faq/>
<Footer/>

 </main>
</template>

<script setup>
import Nav from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Testimoies from '../components/Testimonial.vue'
import About from '../components/AboutUs.vue'
import Services from '../components/Services.vue'
import Custormers from '../components/Client.vue'
import Faq from '../components/Faq.vue'
import Footer from '../components/Footer.vue'
</script>
<style scoped>
:root{
  --primary-color:#70008f
}










details {
  direction: rtl;
  text-align: left;
  display: flex;
}

details a {
  margin-bottom: 10px;
}






/* NAV FIXED */

.fixed {
  background-color: white;
  width: 100%;
  position: fixed;
  inset: 0;
  margin-top: 0;
  transition: 0.5s;
  z-index: 5;
}



</style>

<!-- <script setup>
 const nav = document.querySelector('nav');
    const main = document.querySelector('.div')
    console.log(nav);
let navTop = nav.offsetTop= 100;

function fixedNav() {
if (window.scrollY >= navTop) {    
nav.classList.add('fixed');
} else {
nav.classList.remove('fixed'); 
}

}

window.addEventListener('scroll', fixedNav);
 let menu = document.querySelector('.menu');
    menu.onclick = function(){
        menu.classList.toggle('active');
    }
let animateP = document.querySelectorAll('.ptag-move')
    let answers = document.querySelectorAll(".accordion");
    let icon = document.querySelectorAll('.accordion__question p i')
    console.log(icon);
      answers.forEach((event) => {
         event.addEventListener('click', () => {
            if (event.classList.contains("active")) {
                setTimeout(()=>{
                    event.classList.remove("active");
                },500)
               animateP.forEach((pTags)=>{
                    pTags.classList.add('moveUp')
               })
            } else {
                animateP.forEach((pTags)=>{
                    pTags.classList.add('moveDown')
                    pTags.classList.remove('moveUp')
               })
                    event.classList.add("active");
            }
         })
      })</script> -->

<style scoped>
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
@media (max-width: 849px) {
  nav button {
    padding: 0.7em 5em;
    width: 15%;
  }
  .aboutMain-con {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
  }
  .abt-con {
    width: auto;
  }

  #about-us {
    margin-top: 0.2em;
    padding-bottom: 7em;
  }
}

@media (max-width: 720px) {
  nav {
    display: none;
  }
  .menu .market a:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .menu .market {
    position: relative;
  }

  .menu .div {
    position: relative;
  }
  .menu .div a {
    color: var(--secondary-color);
    width: 100%;
    height: 2em;
    border-radius: 0.5em;
    transition: 2s ease-in-out;
  }

  .menu .div a:hover {
    background-color: white;
    color: var(--primary-color);
    width: 100%;
    justify-content: center;
    align-items: center;
    transition: 2s ease-in-out;
  }
  .menu .market a:hover + .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }
  .menu .div:hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .closeToggle {
    display: block;
  }
  .Progress {
    padding: 1em;
  }
  #about-us {
    margin-top: 0;
    padding-bottom: 5em;
  }
}
@media (max-width: 608px) {
  .hero-btn button {
    margin-top: 1.5em;
  }
  #about-us {
    margin-top: 0;
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
  .main {
    padding: 0 5px;
  }
  .hero-btn {
    margin: 1em;
  }
  .hero-btn button {
    font-size: clamp(15px, 1vw, 10px);
  }

  .Progress {
    width: 95%;
    display: flex;
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

  .Progress p {
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: clamp(25px, 4vw, 50px);
  }
  .Progress p > span {
    font-size: clamp(8px, 3vw, 50px);
  }
}

@media (max-width: 494px) {
  .lorem-text {
    font-size: (0.6em, 1.5vw, 8em);
    margin-top: 3px;
  }
  .hero-btn button {
    margin-top: 0.5em;
  }
  .sub-main {
    padding: 1.5em;
  }
}

@media (max-width: 437px) {
  .hero-btn button {
    margin-bottom: 0.5em;
  }
  .Progress p {
    font-size: clamp(15px, 4vw, 50px);
    font-weight: 300;
  }

  .sevices-main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    place-items: center;
  }
}

@media (max-width: 395px) {
  .aboutMain-con {
    padding: 2em 8px;
  }
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

@media (max-width: 890px) {
  .faqImg {
    width: 50%;
  }

  .faqImg img {
    height: 80vh;
    width: 80vh;
  }
}
@media (max-width: 705px) {
  .faqImg {
    display: none;
  }
}

/* ANOTHER SECTION DOWNWARD */
@media (max-width: 967px) {
  .footer-img {
    display: none;
  }
}

@media (max-width: 634px) {
  #FAQ {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 0;
    /* border: 1px solid red; */
  }
  .Faq {
    height: 100%;
  }

  .Faq h2 {
    align-self: center;
  }
  .app-img {
    display: none;
  }
  .app-txt {
    width: 100%;
  }
}
@media (max-width: 500px) {
  #APP h1 {
    font-size: 3em;
    font-weight: bold;
    margin-top: 0;
  }
  #APP h1 span {
    border-bottom: 3px solid var(--secondary-color);
    width: 0.1em;
  }
  .app-img {
    display: none;
  }
  .app-txt {
    width: 100%;
    font-size: 13px;
  }

  /* 
    .foot-txt{
        display: flex;
        gap: 2em;
    }
    .foot-txt h3:first-child{
        border-right: 3px solid var(--secondary-color);
        padding-right: 3em;
    }
    .foot-txt h3:nth-child(2){
        border-right: 3px solid var(--secondary-color);
        padding-right: 3em;
    }
    .footer-txt{
        display: flex;
        flex-direction: column;
        gap: .6em;
        align-items: center;
        font-size: 10px;

    }
    .footer-icon{
        display: flex;
        gap: 1.3em;
        font-size: 10px;
    }
} */
  /* @media(max-width:905px){

    .footer-icon{
        display: flex;
        gap: 3px;
        width: 100%;
        display: flex;
       justify-content: space-evenly;
    }
    .foot-txt{
        margin-bottom: 1vh;
    }
}
    footer{
        display: flex;
       gap: 6em;
     

} */

  /* @meyyyy */
}
@media (max-height: 63px) {
  nav {
    position: fixed;
  }
}
</style>
