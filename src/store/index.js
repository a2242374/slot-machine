import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultGold = 99
try {
  if (localStorage.gold) {
    defaultGold = localStorage.gold
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    gold: defaultGold,
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
    }],
    winnum: 0
  },
  mutations: {
    increment (state) {
      state.gold++
      try {
        localStorage.gold = state.gold
      } catch (e) { }
    },
    decrement (state) {
      if (state.gold === 0) {
        state.gold = 0
      } else {
        state.gold--
      }
      try {
        localStorage.gold = state.gold
      } catch (e) { }
    },
    changeGold (state, obj) {
      let multiple = state.types[obj.index - 1].num * obj.mul

      // console.log(state.types[obj.cur].num + ' win:' + multiple)
      state.gold += multiple
      try {
        localStorage.gold = state.gold
      } catch (e) { }

      for (var i = 0; i < 8; i++) {
        // this.types[i].num = 0
        state.types[i].num = 0
      }
      state.winnum = multiple
      // state.gold += result
      // console.log(obj.cur + '  ' + obj.mul)
    },
    pourAdd (state, item) {
      this.state.types[item - 1].num++
    }
  }
})
