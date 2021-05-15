import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

// VueCookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// Bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(VueRouter)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
