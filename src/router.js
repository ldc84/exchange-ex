import Vue from 'vue'
import Router from 'vue-router'
import VueStore from './store';
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trade',
      name:'trade',
      beforeEnter: (to, from, next) => {
        const symbol = Object.keys(VueStore.getters.tickers)[0];
        const symbolDefault = symbol ? `/trade/${symbol}` : '/' ;
        return next(symbolDefault);
      }
    },
    {
      path: '/trade/:symbol',
      name: 'trade',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Trade.vue'),
      beforeRouteEnter (to, from, next) {
        
      }
    },
    {
      path: '/coinList',
      name: 'coinList',
      component: () => import('./views/CoinList.vue')
    }
  ]
})
