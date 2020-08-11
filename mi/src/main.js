import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from "./store/index.js"

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination, Autoplay} from "swiper";
Swiper.use([Navigation, Pagination,Autoplay]);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
