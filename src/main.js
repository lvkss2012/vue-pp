import Vue from 'vue';
import App from './App.vue';
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = true;

axios.defaults.baseURL = 'http://47.102.44.79:8080/api/';
// axios.defaults.baseURL = 'http://localhost:4000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});