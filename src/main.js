import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Dayjs from "vue-dayjs";

Vue.config.productionTip = false;

Vue.use(Dayjs);

new Vue({
    router,
    Dayjs,
    render: h => h(App)
}).$mount('#app');