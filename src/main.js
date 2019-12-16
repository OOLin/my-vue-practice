import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Card
import Card from '@/components/Card.vue'
Vue.component('Card', Card)
import CardLogo from '@/components/CardLogo.vue'
Vue.component('CardLogo', CardLogo)
import ThemeGrid from '@/components/ThemeGrid.vue'
Vue.component('ThemeGrid', ThemeGrid)
// Inputs
import InputName from '@/components/input/InputName.vue'
Vue.component('InputName', InputName)
// Not classified yet
import Navigation from '@/frames/Navigation.vue'
Vue.component('Navigation', Navigation)
import MyFooter from '@/frames/MyFooter.vue'
Vue.component('MyFooter', MyFooter)
// Bootstrap
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// productionTip
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')