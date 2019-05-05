import Vue from 'vue'
import App from './App.vue'

import "../src/assets/statics/site/css/style.css";


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


import VueRuter from "vue-router";

Vue.use(VueRuter);

import index from './components/index.vue';
import detail from './components/detail.vue';
import userContainer from './components/userContainer.vue';
import userCenter from './components/userCenter.vue';
import order from './components/order.vue';
import orderDetail from './components/orderDetail.vue';


const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/detail/:id',
        component: detail
    },
    {
        path: '/userContainer',
        component: userContainer,
        children: [
            {
                path: '/userConter',
                component: userCenter
            },
            {
                path: '',
                redirect: '/userConter'
            },
            {
                path: '/order',
                component: order
            },
            {
                path: '/orderDetail',
                component: orderDetail
            }
        ]
    }
];

const router = new VueRuter({
    routes

});


Vue.config.productionTip = false;

import axios from 'axios';

Vue.prototype.$axios = axios;

axios.defaults.baseURL = "http://111.230.232.110:8899";

import moment from 'moment';

Vue.filter("formatTime", value => {
    return moment(value).format('YYYY年MM月DD日');
})


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
