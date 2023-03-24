<script setup>
</script>
<template>
    <div class="back-ground">
        <div class="container">
        <div class="sign-in">
            <h1>Sign in</h1>
            <div class="signs">
                <p>f</p>
                <p>G<sup>+</sup></p>
                <p>in</p>
            </div>
            <div class="input">
                <input type="email" placeholder="user email">
                <br>
                <input type="password" placeholder="password">
            </div>
            <div class="end"  >
                <a href="#">Forgot your password</a><br>
                <p>sign in</p>
            </div>
        </div>
        <div class="sign-up">
            <!-- <h1>Sign UP</h1>
            <p id="up">Sign up here if you don't have an account</p>
            <p id="up-up">sign up</p> -->
            <img src="../assets/images/sideMe.png" alt="">
        </div>
    </div>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    width: 60%;
    height: 70%;
    align-items: center;
    /* justify-content: center; */
    /* border: 2px solid red; */
    margin: 80px auto;
    border-radius: 12px;
    box-shadow: 0px 7px 40px -10px black ;
    transition: .3s ease-in-out ;
}

.back-ground{
    background-color: rgb(232, 235, 235);
    font-family: sans-serif;
}

.sign-in{
    /* border: 2px solid red; */
    width: 50%;
    text-align: center;
    background-color: white;
    padding: 100px 0;
    height: 126.7mm;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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
    transform: scale(1.1);
}


sup{
    padding-top: 10px;
    position: absolute;
    bottom: 13px;
    font-size: 9px;
    right: 8px;
    font-weight: bolder;
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
    color: black;
    /* border: 2px solid red; */
    
}
.end{
    display: block;
    /* border: 2px red solid; */
    align-items: center;
    margin-top: 10px;
}
a:hover{
    text-decoration: underline;
    color: black;
}

.end p{
    display: inline-block;
    background-color:#70008f;
    color: white;
    width: 150px;
    height: 40px;
    margin-top:10px;
    padding: 15px 10px;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
}

.end p:hover{
    background-color:#48025c;
    transition: .3s ease-in-out;
    transform: scale(1.1);
}


.end p:active{
    background-color:#32023f;
}


.sign-up{
    /* border: 2px solid red; */
    width: 50%;
    text-align: center;
    background-color:#70008f;
    color: white;
    height: 126.7mm;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}


.sign-up h1{
    margin-bottom: 25px;
}

#up{
    font-weight: lighter;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    opacity: 0.7;
}

#up-up{
    border: 1px solid white;
    margin-top: 25px;
    width: 150px;
    height: 40px;
    padding: 14px 10px;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
}



#up-up:hover{
    background-color:#400252;
    transition: .3s ease-in-out;
    transform: scale(1.1);
}


#up-up:active{
    background-color:#32023f;
}




@media screen and (max-width: 600px ) {
    .container{
        flex-direction: column;
    }
    .sign-in{
        width:100%;
        border-top-right-radius: 12px ;
        height: auto;
    }
    .sign-up{
        width:100%;
        border-top-right-radius:0 ;
        border-bottom-left-radius:12px ;
    }
}



/* background-color: rgb(6, 219, 219); */




</style>