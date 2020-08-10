import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/Home.vue';
import classify from '../views/Classify.vue';
import cart from '../views/Cart.vue';
import my from '../views/My.vue';


import search from '../views/Search.vue';
import login from '../views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/my',
    component: my
  },

  {
    path: '/search',
    component: search
  },
  {
    path: '/login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
