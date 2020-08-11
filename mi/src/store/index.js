import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    wrap: [],
    isseen: false
  },
  mutations: {
    //添加购物车
    adddetail(state, item) {
      let index = -1;
      for (let i = 0; i < state.wrap.length; i++) {
        if (state.wrap[i].title == item.title) {
          index = i;
        }
      }
      if (index > -1) {
        state.wrap[index].num++
      } else {
        state.wrap.push({
          title: item.title,
          img: item.img,
          price: item.price,
          num: 1,
          checked: true
        })
      }
      
    },
    fun(state) {
      state.isseen = true
    },
    addnum(state, index) {
      state.wrap[index].num++
    },
    minusnum(state, index) {
      state.wrap[index].num--
    },
    delitem(state, index) {
      state.wrap.splice(index, 1)
    }
  }
})
export default store;