import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import VueSession from 'vue-session'
import Vuelidate from 'vuelidate'

import '@/assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueSession)
Vue.use(Vuelidate)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
