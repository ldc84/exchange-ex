import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '^@/API';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    symbols: {
      USDT:[],
      BTC:[],
      ETH:[],
      KRW:[]
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
      for(let i=0; i<=symbols.length-1; i++){
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
        }
      }
    }
  }
})
