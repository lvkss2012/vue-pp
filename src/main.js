import Vue from 'vue';
import App from './App.vue'

import {Link} from 'element-ui'
Vue.config.productionTip = true;

Vue.use(Link);

new Vue({
    el: '#app',
    render: h => h(App)
});