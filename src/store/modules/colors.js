import colors from '@/data/colors';

export default {
  state: {
    colors,
    activeColor: colors[0],
  },
  getters: {
    colors(state) {
      return state.colors;
    },
    activeColor(state) {
      return state.activeColor;
    },
    activeColorHexCode(state) {
      return state.activeColor.hexCode;
    },
  },
  mutations: {
    setActiveColor(state, color) {
      state.activeColor = color;
    },
  },
  actions: {
    setActiveColor(context, color) {
      context.commit('setActiveColor', color);
    },
  },
};
