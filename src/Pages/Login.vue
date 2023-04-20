<script setup>

</script>
<template>
    <div class="back-ground">
        <div class="container">
        <div class="sign-in">
            <h1>Sign In</h1>


            <div class="input">
               <div class="class">
                <label for="email">Email<sup>*</sup></label>
                <input type="email" id="email" name="emal">
               </div>
               <div class="class">
                <label for="password">Password<sup>*</sup></label>
                <input type="password" id="password" name="password">
               </div>
            </div>
            <div class="end"  >
                <a href="#">Forgot your password?</a><br>
                <button class="hover:shadow-inner">sign in</button>
            </div>
            <div class="create">
                <p>Don't have an account yet? <a href="#">Sign Up</a></p>
                <a href="#">Activate Account</a>
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
    font-weight: 400;
    color: var(--primary-color);
}

.class{
    display: flex;
    gap: 5px;
    flex-direction:column;
    align-items: start;
    justify-content: center;
}

h1{
    color: var(--primary-color);
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.sign-in{
    /* border: 2px solid red; */
    width: 100%;
    text-align: center;
    background-color: white;
    padding: 70px 50px ;
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
    width: 100%;
    border: 1px solid rgb(232, 235, 235);
    outline: none;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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














@media screen and (max-width: 500px ) {

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