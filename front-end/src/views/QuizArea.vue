<template>
  <div class="about">
    <div class="skor__area">
      Skor:{{skor}}
    </div>
    <div class="question__aria">
      <h1>{{ obj.question }}</h1>
      <div class="choose-button">
              <div class="" v-for="answer in obj.answers" :key="answer">
       <label :for="answer"> <input type="radio" v-model="chan" name="" id="" :value="answer" />
        {{ answer }}</label>
      </div>
      </div>

      <t-button @click="approval(obj.correctAnswers)">Gönder</t-button>
    </div>
       <div class="popup" v-if="popup">
      <b @click="popup=false;">X</b>
      <h1>Test Sonuna Geldin <br> Skor:{{skor}} </h1>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
let arrData=0;
export default {
  data() {
    return {
       popup:false,
      questions: [],
      obj:{},
      chan:"",
      skor:0
    };
  },
  methods: {
    ...mapActions(["fetchquestion"]),
    fetch() {
      this.fetchquestion().then((res) => {
        res.forEach((element) => {
          if (element.subject === this.$route.params.id) {
            this.questions.push(element);
          }
        });
        this.random()
      });
    },
    random(){
          console.log(this.questions,arrData);
this.obj=this.questions[arrData]
    },
    approval(e){
      if (this.chan===e) {
        this.skor=this.skor+5
 
      }else{
        this.skor=this.skor-5
      }
           ++arrData
      if (this.questions.length>arrData) {
this.random()
console.log(arrData);
      }else{
        this.popup=true
      }
   
    },

  },
watch:{
chan(){
  console.log(this.chan);
}
},

  mounted() {
    this.fetch();
    console.log(this.findArr);
  },
};
</script>
<style scoped lang="scss">
.about{
  text-align: center;
  .skor__area{
    font-size: 18pt;
color: #fff;
  }
.question__aria{
  text-align: center;
margin-top: 143px;
color: #fff;
font-size: 23px;
button{
font-size: 20px;
padding: 5px;
margin-top: 24px;
border-radius: 13px;
box-shadow: 4px 3px 9px #0d0d0d;
}
h1{
  font-family: PureGrapes;
  text-shadow: 8px 5px 6px black;
font-weight: 600  ;
}
.choose-button{
  div{
    display: inline;
    margin-right: 25px;
input[type=radio]{
appearance: none;
background-color: #fff;
margin: 0;
font: inherit;
color: currentColor;
width: 1em;
height: 1em;
border: 0.15em solid currentColor;
border-radius: 50%;
transform: translateY(-0.075em);
&:checked{
  background: green;
  & + label{
    color: aqua;
  }
}
}
  }
}
}

}
</style>