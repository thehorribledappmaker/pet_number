import Vue from 'vue';
import App from './App.vue';
import store from './store';
// import Eth from 'ethjs';
// var eth = new Eth(new Eth.HttpProvider('https://mainnet.infura.io/'));
// if (
//   typeof window.web3 !== 'undefined' &&
//   typeof window.web3.currentProvider !== 'undefined'
// ) {
//   console.log('shit');
//   eth.setProvider(window.web3.currentProvider);
// } else {
//   eth.setProvider(provider); // set to TestRPC if not available
// }
// store.commit('SET_WEB3_INSTANCE', eth);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
