import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    getQuestion(state,payload){
      state.data=payload;
    },
    setQuestion(state,payload){
      state.data.push(payload);
    }
  },
  actions: {
async fetchquestion(contex){
  return await axios.get("http://localhost:3000/api/pensroute/").then(res=>{
  contex.commit("getQuestion",res.data)
  return res.data}
  )
},
async postquestion(contex,payload){
  console.log(payload);
  return await axios.post("http://localhost:3000/api/penroute",{...payload}).then(res=>{
  contex.commit("setQuestion",res.data)
  return res.data}
  )
}
  },
  modules: {
  }
})
