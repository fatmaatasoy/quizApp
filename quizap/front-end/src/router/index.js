import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import( '../views/Home.vue')
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import('../views/QuizArea.vue')
  },
  {
    path: '/SoruEkle',
    name: 'SoruEkle',
    component: () => import('../components/addquestion.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
