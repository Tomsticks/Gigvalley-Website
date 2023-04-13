<script setup>
</script>
<template>
    <div class="back-ground">
        <div class="container">
        <div class="sign-up">
            <h1>Sign Up</h1>


            <div class="input">
                <div class="class">
                 <label for="fullname">Full name<sup>*</sup></label>
                 <input type="text" id="fullname" name="fullname">
                </div>
               <div class="class">
                <label for="email">Email<sup>*</sup></label>
                <input type="email" id="email" name="emal">
               </div>
               <div class="class">
                <label for="phone">Phone<sup>*</sup></label>
                <input type="password" id="phone" name="phone">
               </div>
               <div class="class">
                <label for="password">Password<sup>*</sup></label>
                <input type="password" id="password" name="password">
               </div>
            </div>
            <div class="end"  >
                <button class="hover:shadow-inner">sign Up</button>
            </div>
            <div class="create">
                <p>Already a member? <a href="#">Sign In</a> </p>
            </div>
        </div>
       
    </div>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    width:55vh;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: -4px 6px 38px 2px rgba(0,0,0,0.14);
-webkit-box-shadow: -4px 6px 38px 2px rgba(0,0,0,0.14);
-moz-box-shadow: -4px 6px 38px 2px rgba(0,0,0,0.14);
}

.back-ground{
    background-color: rgb(232, 235, 235);
    display: grid;
    place-items: center;
    height: 100vh;
    font-family: sans-serif;
}

label{
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-color);
}

.class{
    display: flex;
    gap: 3px;
    flex-direction:column;
    align-items: start;
    justify-content: center;
}

h1{
    color: var(--primary-color);
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
}

.sign-up{
    /* border: 2px solid red; */
    width: 100%;
    text-align: center;
    background-color: white;
    padding: 40px 20px ;
    height: 100%;

}










.input{
    display: block;
    align-items: center;
    /* border: 1px solid green; */
}

input{
    display: inline-block;
    margin-bottom: 10px;
    height: 35px;
    width: 100%;
    border: 1px solid rgb(232, 235, 235);
    outline: none;
}


.sign-up a{
    text-decoration: none;
    color: blue;    
}
.end{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
a:hover{
    text-decoration: underline;
}

.end button{
    display: inline-block;
    background-color:#70008f;
    color: white;
    width: 100px;
    height: 40px;
    margin-top:10px;
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
    transition: .3s ease-in-out;
}

.end button:hover{
    background-color:#48025c;
}

.create{
    margin-top: 30px;
}














@media screen and (max-width: 600px ) {

    .back-ground{
        background-color: #fff;
    }
    .container{
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
    .sign-in{
        width:100%;
        height: 100%;
        border-top-right-radius: 12px ;
        height: auto;
    }
}



/* background-color: rgb(6, 219, 219); */




</style>