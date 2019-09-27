import Vue from 'vue'
import vSelect from 'vue-select'

import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './css/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/dist/css/swiper.css'
import VueMask from 'v-mask'

Vue.use(VueMask)
Vue.use(VueAwesomeSwiper)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
