import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    data: 'SHIT HEAD',
    // web3_instance: null,
    // contract_abi: contractABI,
    // contract_address: contractAddress
  },
  getters: {
    greet({
      data
    }) {
      return data;
    },
    w3({
      web3_instance
    }) {
      return web3_instance;
    },
    // contractABI({
    //   contract_abi
    // }) {
    //   return contract_abi;
    // },
    // contractAddress({
    //   contract_address
    // }) {
    //   return contract_address;
    // }
  },
  mutations: {
    // SET_WEB3_INSTANCE(state, eth) {
    //   state.web3_instance = eth;
    // },
    // reportResponse(state, res) {
    //   console.log(res);
    //   if (Array.isArray(res) && res.length > 0) {
    //     if ('topics' in res[0]) {
    //       state.eventLogs.events = res;
    //     }
    //   }
    //   // for (const log of res) {
    //   //   console.log(log.data.length);
    //   // }
    // }
  },
  actions: {
    // async sendQuery({
    //   commit
    // }, query_func) {
    //   commit('reportResponse', await query_func());
    // }
  },
  strict: debug
});