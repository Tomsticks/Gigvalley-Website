<script setup>
</script>
<template>
    <div class="back-ground">
        <div class="container">
        <div class="sign-in">
            <h1>Sign up</h1>
            <p class="con">continue with</p>
            <div class="signs">
                <p>f</p>
                <p>G</p>
                <p>in</p>
            </div>
            <hr>
            <p class="fill">fill in a valid details</p>
            <div class="input">
                <input type="email" placeholder="user email">
                <br>
                <input type="password" placeholder="password">
                <br>
                <input type="email" placeholder="user email">
                <br>
                <input type="password" placeholder="password">
            </div>
            <div class="end"  >
                <button class="hover:shadow-inner">sign up</button><br>
                <a href="#">login</a>
            </div>
            
        </div>
        <div class="sign-up">
            <img src="../assets/images/sideMe.png" alt="">
        </div>
    </div>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: row-reverse;
    width: 60%;
    height: 80%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0px 7px 40px -10px black ;
}
.con{
    color: #5e0377a6;
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

hr{
    border: 1px solid rgba(0, 0, 0, 0.295);
}

.sign-in{
    width: 50%;
    text-align: center;
    justify-content: center;
    background-color: white;
    align-items: center;
    padding: 20px 0;
    height: 100%;
}

.fill{
    text-transform: capitalize;
    margin: 10px;
    color: #5e0377a6;
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