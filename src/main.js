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
import 'element-ui/lib/theme-chalk/index.css';
import {
  Select,
  Input,
  Upload,
  Col,
  Row,
  Button,
  Table,
  TableColumn,
  InputNumber
} from 'element-ui';

Vue.use(Select);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(InputNumber);
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});