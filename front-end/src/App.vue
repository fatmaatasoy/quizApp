<template>
<div id="app">
  <div class="area " >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
<router-link class="addQuest" :to="{ name: 'SoruEkle' }">Soru Ekle</router-link>
<router-view/>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Sriracha&display=swap');
button,
body{
  font-family: 'Sriracha', cursive;
}
.popup{
  background: #30323e;
position: absolute;
width: 39%;
height: 200px;
padding: 18px 9px;
top: 50%;
left: 29%;
border-radius: 7px;

b{
  float: right;
font-size: 20pt;
color: #fff;
&:hover{
  color: rgb(163, 32, 32);
}
}
h1{
  margin-top: 4%;
  text-align: center;
  font-family: 'Bungee Shade', cursive;
color: #fff;
text-shadow: 8px 5px 6px black;
font-weight: 600  ;

  animation-name: textanimation;
  animation-duration:4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards
}

}
.area{
  width: 100%;
height: 100%;
z-index: -1;
position: fixed;
top: 0;
left: 0;

}
.active{
filter: brightness(0.5);
}
.addQuest{
    margin-right: 25px;
font-size: 20px;
padding: 13px;
border-radius: 0 0 31px 30px;
box-shadow: 4px 3px 9px #0d0d0d;
background: #fff;
color: #000;
padding: 21px 10px;
text-decoration: none;
}
.context {
    width: 100%;
    position: absolute;
    z-index: -1;
    top:50vh;
    
}

.context h1{
    text-align: center;
    color: #fff;
    font-size: 50px;
}


.area{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
    
   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
@keyframes textanimation{
    0%    { color: #f49494;
}
25% {
  color: #ffff9b;
}
50% {
  color: #7cffc2;
}
100% {
  color: #81ff81;
}
}
</style>
