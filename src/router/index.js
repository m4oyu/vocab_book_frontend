import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import Translate from '../components/Translate.vue'
import MyBook from '../components/MyBook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/signin',
    component: SignIn
  },
  {
    path: '/user/signup',
    component: SignUp
  },
  {
    path: '/translate',
    component: Translate
  },
  {
    path: '/book',
    component: MyBook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router