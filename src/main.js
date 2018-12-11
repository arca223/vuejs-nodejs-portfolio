import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from "vue-dayjs";

Vue.config.productionTip = false;

Vue.use(dayjs);

new Vue({
    router,
    dayjs,
    render: h => h(App)
}).$mount('#app');