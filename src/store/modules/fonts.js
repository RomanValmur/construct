import fonts from '@/data/fonts';

export default {
  state: {
    fonts,
    activeFont: {},
  },
  getters: {
    fonts(state) {
      return state.fonts;
    },
    activeFont(state) {
      return state.activeFont;
    },
  },
  mutations: {
    setActiveFont(state, font) {
      state.activeFont = font;
    },
  },
  actions: {
    setActiveFont(context, font) {
      context.commit('setActiveFont', font);
    },
  },
};
