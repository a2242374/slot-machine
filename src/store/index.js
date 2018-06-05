import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gold: 99,
    types: [{
      type: 1,
      num: 0
    }, {
      type: 2,
      num: 0
    }, {
      type: 3,
      num: 0
    }, {
      type: 4,
      num: 0
    }, {
      type: 5,
      num: 0
    }, {
      type: 6,
      num: 0
    }, {
      type: 7,
      num: 0
    }, {
      type: 8,
      num: 0
    }]
  },
  mutations: {
    increment (state) {
      state.gold++
    },
    decrement (state) {
      state.gold--
    },
    changeGold (state, obj) {
      let multiple = state.types[obj.cur].num * obj.mul
      state.gold += multiple
      for (var i = 0; i < 8; i++) {
        // this.types[i].num = 0
        state.types[i].num = 0
      }

      // state.gold += result
      // console.log(obj.cur + '  ' + obj.mul)
    },
    pourAdd (state, item) {
      this.state.types[item - 1].num++
    }
  }
})
