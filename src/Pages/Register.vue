<template>
  <div class="back-ground">
    <form @submit.prevent="submit" class="container">
      <div class="sign-up">
        <h1>Sign Up</h1>

        <div class="input">
          <div class="class">
            <label for="fullname">Fullname<sup class="star">*</sup></label>
            <input
              @keyup="log"
              v-model="fullname"
              type="text"
              id="fullname"
              name="fullname"
            />
          </div>
          <div class="class">
            <label for="username">Username<sup class="star">*</sup></label>
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div class="class">
            <label for="email">Email<sup class="star">*</sup></label>
            <input v-model="email" type="email" id="email" name="emal" />
          </div>
          <div class="class">
            <label for="phone">Phone<sup class="star">*</sup></label>
            <input v-model="phone" type="text" id="phone" name="phone" />
          </div>

          <div class="class">
            <label for="password">Password<sup class="star">*</sup></label>
            <input
            @keyup="passwordVal"
              v-model="password"
              :type="inputType"
              id="password"
              name="password"
            />
            <!-- <button @click="get" class="border border-[black]"> -->
              <!-- {{ passwordChange }}
            </button> -->
            <p v-if="passwordCheck" class="text-[red]">Password must be contain at least 8 characters</p>
          </div>
          
        </div>
        <div class="end">
          <button @click="submit" class="hover:shadow-inner">sign Up</button>
        </div>
        <div class="create">
          <p>
            Already a member? <router-link to="/login">Sign In</router-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed} from "vue";
const fullname = ref('');
const username = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const passwordCheck = ref(false)

const user = {
  fullname:fullname.value,
  username: username.value,
  email: email.value,
  phone: phone.value,
  password: password.value,
};



// function submit(){
 
//   // localStorage.setItem('users', user.toSting())
// }
  

function passwordVal(){
  passwordCheck.value = true
  if(password.value.length > 7){
    passwordCheck.value = false
  }else{
    passwordCheck.value = true  
  }
}
const submit = ()=>{
  if(!fullname.value || !username.value || !email.value || !phone.value || passwordCheck.value === true){
alert('all field are requried')
  }else{
    alert('welcome')  
  }
}


let inputType = "password";
let passwordChange = "show";
function get(params) {
  if (inputType === "password") {
    inputType = "text";
    passwordChange = "hide";
  } else {
    inputType = "password";
    passwordChange = "show";
  }
}
</script>


<style scoped>
.star{
  color: red;
}
.container {
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -4px 6px 38px 2px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: -4px 6px 38px 2px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: -4px 6px 38px 2px rgba(0, 0, 0, 0.14);
}

.back-ground {
  background-color: rgb(232, 235, 235);
  display: grid;
  place-items: center;
  height: 100vh;
  font-family: sans-serif;
}

label {
  font-size: 20px;
  font-weight: 400;
  color: var(--primary-color);
}

.class {
  display: flex;
  gap: 2px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

h1 {
  color: var(--primary-color);
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
}

.sign-up {
  /* border: 2px solid red; */
  width: 100%;
  text-align: center;
  background-color: white;
  padding: 40px 20px;
  height: 100%;
}

.input {
  display: block;
  align-items: center;
  /* border: 1px solid green; */
}

input {
  display: inline-block;
  margin-bottom: 8px;
  height: 30px;
  width: 100%;
  border: 1px solid rgb(232, 235, 235);
  outline: none;
  padding: 20px;
  /* border-radius: 7px; */
}

.sign-up a {
  text-decoration: none;
  color: blue;
}
.end {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7px;
}
a:hover {
  text-decoration: underline;
}

.end button {
  display: inline-block;
  background-color: #70008f;
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
  transition: 0.3s ease-in-out;
}

.end button:hover {
  background-color: #48025c;
}

.create {
  margin-top: 30px;
}

@media screen and (max-width: 600px) {
  .back-ground {
    background-color: #fff;
  }
  .container {
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
  .sign-in {
    width: 100%;
    height: 100%;
    border-top-right-radius: 12px;
    height: auto;
  }
}

/* background-color: rgb(6, 219, 219); */
</style>
