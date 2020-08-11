import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        wrap:[
            {
                img:require("../assets/cart/01.jpg"),
                title:"米家驱蚊智能版 白色",
                price:"59元",
                num:1,
                checked:true
            },
            {
                img:require("../assets/cart/02.jpg"),
                title:"小米10 Pro 全网通版 8GB+256GB 星空蓝",
                price:"4999元",
                num:1,
                checked:true
            },
            {
                img:require("../assets/cart/08.jpg"),
                title:"小米10 Pro 全网通版 8GB+256GB 星空蓝",
                price:"9999元",
                num:1,
                checked:true
            }
        ],
        isseen:false
    },
    mutations: {
      // adddetail(state,item){
      //   state.wrap.push({
      //     title:item.
      //   })
      // },
      fun(state){
        state.isseen=true
      },
      addnum (state,index) {
        state.wrap[index].num++
      },
      minusnum(state,index){
        state.wrap[index].num--
      },
      delitem(state,index){
        state.wrap.splice(index,1)
      }
    }
  })
  export default store;