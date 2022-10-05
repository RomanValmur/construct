import Vue from 'vue';
import Vuex from 'vuex';
import surfaces from './modules/surfaces';
import colors from './modules/colors';
import fonts from './modules/fonts';
import text from './modules/text';
import bitrix from './modules/bitrix';
import device from './modules/device';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSettingsElement: '',
  },
  getters: {
    activeSettingsElement(state) {
      return state.activeSettingsElement;
    },
  },
  mutations: {
    setActiveSettingsElement(state, element) {
      state.activeSettingsElement = element;
    },
  },
  actions: {
    setActiveSettingsElement(context, element) {
      context.commit('setActiveSettingsElement', element);
    },
  },
  modules: {
    surfaces,
    colors,
    fonts,
    text,
    bitrix,
    device,
  },
});
