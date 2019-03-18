import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ws from '^@/WebSocket';
import GlobalFilters from '^@/Filters';

Vue.config.productionTip = false

const wsInterface = ws;
window.ws = wsInterface;

Vue.use(iView);
GlobalFilters(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
