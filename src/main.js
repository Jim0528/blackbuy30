import Vue from 'vue'
import App from './App.vue'

import "../src/assets/statics/site/css/style.css";

import VueRuter from "vue-router";

Vue.use(VueRuter);

import index from './components/index.vue';


const routes = [
    {
      path: '/index',
      component: index
    }
]

const router = new VueRuter({
  routes
})








Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
