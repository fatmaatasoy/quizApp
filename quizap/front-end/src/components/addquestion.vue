<template>
<div>


  <div class="addQuestino">
 <div>
   <label for=""> Lütfen Soru Girin : </label>
      <t-input
        name="my-input"
        placeholder="Lütfen Soru Girin"
        v-model="setteData.question"
      />
 </div>
<div>
        <label for=""> Lütfen Alan Girin : </label>

      <t-select
        placeholder="Lütfen Alan Girin"
        :options="['Matematik', 'Türkçe']"
        variant="demo"
        v-model="setteData.subject"
      ></t-select>
</div>
<div>
  
  <label for=""> A Şıkkı : </label>
    <t-input
      name="my-input"
      placeholder="A Şıkkı"
      v-model="setteData.answers.a"
    />
</div>
<div>
        <label for=""> B Şıkkı : </label>

    <t-input
      name="my-input"
      placeholder="B Şıkkı"
      v-model="setteData.answers.b"
    />
</div>
<div>
   <label for=""> C Şıkkı : </label>
    <t-input
      name="my-input"
      placeholder="C Şıkkı"
      v-model="setteData.answers.c"
    />
</div>
 <div>
    <label for=""> Doğru Cevap : </label>
      <t-input
        name="my-input"
        placeholder="Cevap"
        v-model="setteData.correctAnswers"
      /> 
 </div>


    <t-button @click="SetpostQuestion">Ekle</t-button>

  </div>   
   <div class="popup" v-if="popup">
      <b @click="popupdisable">X</b>
      <h1>Kayıt başarılı</h1>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      popup:false,
      setteData: {
        question: "",
        answers: {
          a: "",
          b: "",
          c: "",
        },
        correctAnswers: "",
      subject: "",
      },
    };
  },
  methods: {
    ...mapActions(["postquestion"]),
    SetpostQuestion() {
      this.postquestion({ ...this.setteData }).then((res) => {
        console.log(res);
       
      });
       this.popup=true;
         this.setteData.question="";
         this.setteData.answers.a="";
         this.setteData.answers.b="";
         this.setteData.answers.c="";
         this.setteData.correctAnswers="";
         this.setteData.subject=""
         document.querySelector(".addQuestino").classList.add("active");
          document.querySelector(".area").classList.add("active");
    },
    popupdisable(){
      this.popup=false;
       document.querySelector(".addQuestino").classList.remove("active");
          document.querySelector(".area").classList.remove("active");
    }
  },

};
</script>
<style scoped lang="scss" >


.addQuestino {
  text-align: center;
  margin-top: 15%;
  
  div{
    label{
      width: 152px;
display: inline-block;
color: #f7f3f3;
font-size: 11pt;
letter-spacing: 1px;
text-shadow: 5px 1px 8px #000;
    }
    select{
      @extend input;
      width: 320px!important;
height: 52px!important;
    }
    input {
display: inline-block;
width: 307px;
height: 39px;
padding: 5px;
border-radius: 7px;
outline: none;
border-color: #fff;
margin-bottom: 9px;
color: #000;
font-size: 10pt;
font-weight: 600;
letter-spacing: 1.2px;

  }
 
  } button{
  margin-top: 30px;
font-size: 20px;
padding: 13px;
border-radius: 13px;
box-shadow: 4px 3px 9px #0d0d0d;
width: 300px;
background: transparent;
border: 1px solid #fff;
color: #fff;
&:hover{
  animation: buttonAnimate;
  animation-duration: 4s;
}
  }

}

</style>