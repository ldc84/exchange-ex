import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '^@/API';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    // TODO: 수정할거임
    symbols: {
      USDT:[],
      BTC:[],
      ETH:[],
      KRW:[],
      HT:[],
    }
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
      // for문 돌릴때 length를 캐싱
      // 1. const leng = symbols.length-1
      // 2. let i=symbols.length-1; i >= 0; i--
      // const baseCoins = new Set();  // Symbols도 쓰면 좋음
      // TODO: 수정할거임
      // ...Object.assign = object 를 하나로 하기 좋음
      const symbolsLeng = symbols.length-1;
      for(let i=0; i<=symbolsLeng; i++){
        const nameSection = symbols[i].quote_currency.toUpperCase();
        switch (nameSection) {
          case 'USDT':
            state.symbols.USDT.push(symbols[i]);
            break;
          case 'BTC':
            state.symbols.BTC.push(symbols[i]);
            break;
          case 'ETH':
            state.symbols.ETH.push(symbols[i]);
            break;
          case 'KRW':
            state.symbols.KRW.push(symbols[i]);
            break;
          case 'HT':
            state.symbols.HT.push(symbols[i]);
            break;
        }
      }
    }
  }
})
