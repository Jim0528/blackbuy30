import Vue from 'vue'
import App from './App.vue'

import "../src/assets/statics/site/css/style.css";


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


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
