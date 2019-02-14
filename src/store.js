import Vue from 'vue'
import Vuex from 'vuex'
import {API_URL} from '^@/config';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
  },
  actions: {
    coinSorting({ commit }){
      return fetch(API_URL+'/v2/beta/common/currencies')
      .then(response => {
        return response.json()
      }).then(json => {
        let result = [];
        json.data.reduce((key, val)=> {          
          result.push(val.display_name);
        }, [])
        commit('coinList', result);
      }).catch( err => {
        console.log('parsing failed', err)
      })
    }
  },
  mutations: {
    coinList(state, coins) {
      state.coins = coins;
    }
  }
})
