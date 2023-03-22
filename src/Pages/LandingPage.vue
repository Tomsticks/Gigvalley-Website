<template>
  <div>
    <div id="" class="main ">
     

      
  
      
     

      
      <!-- =====================FAQ END================================ -->

      
            </div>
            
         
   
    
  </div>
</template>

<style scoped>
:root{
  --primary-color:#70008f
}
.main {
  padding: 0 2em;
  display: flex;
  flex-direction: column;
}


/* ===========================Hero======================== */



/* =====================ABOUT================ */





::-webkit-scrollbar {
  width: 5.5px;
  transition: 1s ease-in-out;
}

::-webkit-scrollbar:hover {
  width: 9px;
}

::-webkit-scrollbar-track {
  border-radius: 50px;
  padding: 20px;
  margin: 30px;
  background-color: #48015c5d;
}

::-webkit-scrollbar-thumb {
  background: #7d009c;
  border-radius: 50px;
  padding: 20px;
  position: absolute;
  margin: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #70008f;
}
/* ==================SCROLL END==================== */

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
  border-radius: 8px;
}
.div a {
  color: var(--secondary-color);
  width: 100%;
  height: 2em;
  border-radius: 0.5em;
  transition: 2s ease-in-out;
}

.div a:hover {
  transition: 2s ease-in-out;
  padding-left: 30px;
  background-color: white;
  color: var(--primary-color);
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
/* .drop-down{
    display: none;
    flex-direction: column;
    justify-content: center;
} */

details {
  direction: rtl;
  text-align: left;
  display: flex;
}

details a {
  margin-bottom: 10px;
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
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-200%);
  }
  80% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-300%);
  }
}

.div:hover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.question-zone {
  min-height: 70vh;
}
.accordion {
  padding: 20px;
}
.accordion__question p {
  font-family: "inter", sans-serif;
  display: flex;
}
.ptag-move {
  font-family: "inter", sans-serif;
  font-size: 12px;
}
.moveDown {
  animation-name: moveDown;
  animation-duration: 0.5s;
  position: relative;
}
.moveUp {
  animation-name: moveUp;
  animation-duration: 0.5s;
  position: relative;
}
.accordion:hover {
  cursor: pointer;
}
.accordion__question p i {
  color: #5a005a;
}
.accordion__answer {
  display: none;
}
.accordion.active .accordion__answer {
  display: block;
}

@keyframes moveDown {
  0% {
    opacity: 0;
    top: -10px;
  }
  30% {
    opacity: 0.3;
  }
  750% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
@keyframes moveUp {
  0% {
    opacity: 1;
    /* top: 0px; */
  }

  100% {
    opacity: 0;
  }
}
.subscription {
  color: #70008f;
  background-color: #fff;
  padding: 5px 10px;
  font-size: clamp(12px, 2.5vh, 20px);
  border-radius: 10px;
  border: none;
  margin: 20px 0;
  transition: 0.5s ease-in-out;
}
.subscription:hover {
  margin-left: 20px;
  transform: scale(1.7);
  box-shadow: 2px 2px 2px 2px #c108f5;
}
.footer {
  font-size: 14px;
  background-color: var(--color-primary);
  padding: 50px 0;
  color: white;
}

.footer .footer-info .logo {
  line-height: 0;
  margin-bottom: 25px;
}

.footer .footer-info .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.footer .footer-info .logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  font-family: var(--font-primary);
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px 100px;
}

.footer .footer-info p {
  font-size: 14px;
  font-family: var(--font-primary);
}
.footer .social-links {
  display: flex;
  gap: 5px;
  margin-top: 20px;
}
.footer .social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 10px;
  transition: 0.3s;
}

.footer .social-links a:hover {
  color: #fff;
  border-color: #fff;
}

.footer h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

.footer .footer-links {
  margin-bottom: 30px;
}

.footer .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-links ul i {
  padding-right: 2px;
  color: rgba(0, 131, 116, 0.8);
  font-size: 12px;
  line-height: 0;
}

.footer .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-links ul a {
  color: rgba(255, 255, 255, 0.7);
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

.footer .footer-links ul a:hover {
  color: #fff;
}

.footer .footer-contact p {
  line-height: 26px;
}

.footer .copyright {
  text-align: center;
}

.footer .credits {
  padding-top: 4px;
  text-align: center;
  font-size: 13px;
}

.footer .credits a {
  color: #fff;
}

@media (max-width: 858px) {
  .row {
    padding: 10px 20px;
    /* grid-template-columns: repeat(auto-fit,minmax(200px ,1fr)); */
  }
}
@media (max-width: 726px) {
  .row {
    padding: 10px 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
@media (max-width: 642px) {
  .row {
    padding: 10px 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
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
