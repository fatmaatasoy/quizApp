<template>
  <div class="start">
    <div class="facts">
<figure class="facts__images">
  <img src="../images/man-sitting-at-desk-with-laptop.png" alt="">
</figure>
<div class="facts__text">
  <p class="thought">{{fact.facts}}</p>
</div>
    </div>
    <div class="choose__aria">
      <h1>Lütfen Alan Seçin</h1>
<div class="button__Group">
  <t-button @click="findSubject($event.target)">Matematik</t-button>
<t-button @click="findSubject($event.target)">Türkçe</t-button>

</div>
    </div>
<figure class="div-3">
  <img src="../images/person-learning-online.png" alt="">
</figure>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
subjectName:"",
fact:{}
  }
},
methods:{
  findSubject(e){
    console.log(e.textContent);
  this.$router.push({
    name:'About',
    params:{id:e.textContent}
  })
  },
   async factFetch(){
     const id=Math.floor( Math.random()*7);
return await  axios.get('http://localhost:3000/api/userroute/').then(res=>{
console.log(res.data)
this.fact= res.data[id]
})

  }
},
mounted(){
  this.factFetch()
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

.start{
text-align: center;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
.facts{ grid-area: 1 / 2 / 3 / 6;
  .facts__images{
    img{
      border-radius: 50%;
height: 168px;
transform: rotateY(186deg);
float: right;
    }
  }
  .facts__text{
    .thought {
  display:flex;
  background-color:#fff;
  padding:20px;
  border-radius:30px;
 animation-name: animasyon3;
animation-duration: 6s;
  min-height:40px;
  margin:20px;
  position:relative;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-size: 19px;
}
.thought:before,
.thought:after {
  content:"";
  background-color:#fff;
  border-radius:50%;
  display:block;
  position:absolute;
  z-index:-1;
}
.thought:before {
  width:44px;
  height:44px;
  top:-12px;
  left:28px;
  box-shadow:-50px 30px 0 -12px #fff;
}
.thought:after {
  bottom:-10px;
  right:26px;
  width:30px;
  height:30px;
  box-shadow:40px -34px 0 0 #fff,
             -28px -6px 0 -2px #fff,
             -24px 17px 0 -6px #fff,
             -5px 25px 0 -10px #fff;
  
}
  }
}
.choose__aria{
   grid-area: 3 / 2 / 5 / 5; 
}
h1{
 font-size: 30pt;
font-family: 'Bungee Shade', cursive;
color: #fff;
text-shadow: 8px 5px 6px black;
font-weight: 600  ;
margin: 0px;
margin-bottom: 25px;
  animation-name: textanimation;
  animation-duration:4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards
  }

  .button__Group{
    button{
       margin-right: 25px;
font-size: 20px;
padding: 13px;
border-radius: 13px;
box-shadow: 4px 3px 9px #0d0d0d;
    }
  }

  }.div-3{
    grid-area: 4/1/6/1;
    margin-bottom: 0px;
  }
 @keyframes animasyon3 {
    from  {width: 0%; opacity: 0;}
   to{width: 76%; opacity: 1;}
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
