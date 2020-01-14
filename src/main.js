import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./stores/store";
import dayjs from "dayjs";
import VueDayjs from "vue-dayjs";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

Vue.use(VueDayjs, dayjs);
Vue.use(VueAxios, axios);

new Vue({
    router,
    store,
    dayjs,
    axios,
    render: h => h(App)
}).$mount('#app');

