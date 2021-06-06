import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../components/Top.vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import Translate from '../components/Translate.vue'
import MyBook from '../components/MyBook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
  },
  {
    path: '/user/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/translate',
    name: 'translate',
    component: Translate
  },
  {
    path: '/book',
    name: 'myBook',
    component: MyBook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router