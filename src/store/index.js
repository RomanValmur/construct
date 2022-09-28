import Vue from 'vue';
import Vuex from 'vuex';
import surfaces from './modules/surfaces';
import colors from './modules/colors';
import fonts from './modules/fonts';
import text from './modules/text';
import bitrix from './modules/bitrix';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    surfaces,
    colors,
    fonts,
    text,
    bitrix,
  },
});
