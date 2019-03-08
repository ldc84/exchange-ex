import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '^@/API'
import Constant from '^@/Constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    // TODO: 수정할거임
    symbols: {}
  },
  getters: {
    coins(state) {
      return state.coins;
    },
    symbols(state) {
      return state.symbols;
    }
  },
  actions: {
    getCoinList(context){
      API.getCoinList()
        .then(coinList => {
          context.commit(Constant.COIN_LIST, coinList);
        });
    },
    getSymbols(context){
      API.getSymbols()
        .then(symbols => {
          context.commit(Constant.MARKET_LIST, symbols);
        })
    }
  },
  mutations: {
    [Constant.COIN_LIST]: (state, coinList) => {
      state.coins = coinList;
    },
    [Constant.MARKET_LIST]: (state, symbols) => {
      // for문 돌릴때 length를 캐싱
      // 1. const leng = symbols.length-1
      // 2. let i=symbols.length-1; i >= 0; i--
      // const baseCoins = new Set();  // Symbols도 쓰면 좋음
      // ...Object.assign = object 를 하나로 하기 좋음

      const results = symbols.reduce((prev, curr, index) => {
        if(!prev.hasOwnProperty(curr.quote_currency)) {
          prev[curr.quote_currency] = [];
        }
        prev[curr.quote_currency].push(curr);
        return prev;
      }, {});

      state.symbols = results;

    }
  }
})
