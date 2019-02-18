import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '^@/API';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    symbols: []
  },
  getters: {
    coins(state) {
      return state.coins;
    }
  },
  actions: {
    getCoinList(context){
      API.getCoinList()
        .then(coinList => {
          context.commit('COIN_LIST', coinList);
        });
    },
    getSymbols(context){
      API.getSymbols()
        .then(symbols => {
          context.commit('SYMBOLS_LIST', symbols);
        })
    }
  },
  mutations: {
    COIN_LIST(state, coinList) {
      state.coins = coinList;
    },
    SYMBOLS_LIST(state, symbols) {
      state.symbols = symbols;
    }
  }
})
