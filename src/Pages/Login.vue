<script setup>
</script>
<template>
    <div class="back-ground">
        <div class="container">
        <div class="sign-in">
            <h1>Sign In</h1>
            <div class="signs">
                <p>f</p>
                <p>G</p>
                <p>in</p>
            </div>
            <div class="input">
                <input type="email" placeholder="user email">
                <br>
                <input type="password" placeholder="password">
            </div>
            <div class="end"  >
                <a href="#">Forgot your password</a><br>
                <button class="hover:shadow-inner">sign in</button>
            </div>
        </div>
        <!-- <div class="sign-up"> -->
            <!-- <h1>Sign UP</h1>
            <p id="up">Sign up here if you don't have an account</p>
            <p id="up-up">sign up</p> -->
            <!-- <img src="../assets/images/sideMe.png" alt="">
        </div> -->
    </div>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    width: 60%;
    height: 80%;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0px 7px 40px -10px black ;
}

.back-ground{
    background-color: rgb(232, 235, 235);
    display: grid;
    place-items: center;
    height: 100vh;
    font-family: sans-serif;
}

h1{
    color: var(--primary-color);
    font-size: 30px;
    font-weight: bold;
}

.sign-in{
    /* border: 2px solid red; */
    width: 50%;
    text-align: center;
    background-color: white;
    padding: 100px 0;
    height: 100%;
}


.signs{
    display: flex;
    justify-content: center;
}

.signs p{
    border:1px solid #70008f;
    margin: 20px 5px;
    width: 40px;
    height: 40px;
    font-weight: bolder;
    font-size: 16px;
    padding: 10px;
    border-radius: 100%;
    position: relative;
    cursor: pointer;
    
}

.signs p:hover{
    background-color:#5e0377 ;
    color: white;
    transition: .3s ease-in-out;
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
    width: 70%;
    background-color: rgb(232, 235, 235);
    border: 2px solid rgb(232, 235, 235);
}


input::placeholder{
    padding-left: 12px;
    text-transform: capitalize;
    font-size: 12px;
}


.sign-in a{
    text-decoration: none;
    color: blue;    
}
.end{
    display: block;
    /* border: 2px red solid; */
    align-items: center;
    margin-top: 10px;
}
a:hover{
    text-decoration: underline;
}

.end button{
    display: inline-block;
    background-color:#70008f;
    color: white;
    width: 150px;
    height: 40px;
    margin-top:10px;
    border-radius: 20px;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
    transition: .3s ease-in-out;
}

.end button:hover{
    background-color:#48025c;
}



.sign-up{
    /* border: 2px solid red; */
    width: 50%;
    height: 100%;
}

.sign-up img{
    height: 100%;
    width: 100%;
}









@media (max-width:883px) {
    .container{
        width: 80%;
    }
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
    .sign-up{
        display: none;
    }
}



/* background-color: rgb(6, 219, 219); */




</style>