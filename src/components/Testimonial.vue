<template>
      <section id="test">
        <div class="Progress">
          <p>20+ <span>Completed Project</span></p>
          <p>100+ <span>Happy Customers</span></p>
          <p>500+ <span>Transactions</span></p>
          <p>40+ <span>Testimonial</span></p>
        </div>
      </section>
</template>
<style scoped>
#test {
  display: flex;
  justify-content: center;
}
.Progress {
  display: flex;
  justify-content: space-around;
  background-color: var(--secondary-color);
  box-shadow: 0 0 7px 0 rgb(226, 182, 226);
  padding: 2em;
  width: 80%;
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
  color: #333;
  font-size: clamp(9px, 1.5vw, 20px);
}
@media (max-width: 720px) {

.Progress {
    padding: 1em;
  }
}
@media (max-width: 520px) {
.Progress {
    width: 95%;
    display: flex;
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
@media (max-width: 437px) {
.Progress p {
    font-size: clamp(15px, 4vw, 50px);
    font-weight: 300;
  }
}
</style>