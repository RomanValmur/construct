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
    activeFontName(state) {
      return state.activeFont.name;
    },
  },
  mutations: {
    setActiveFont(state, font) {
      state.activeFont = font;
    },
    setDefaultActiveFont(state) {
      const defaultFont = state.fonts[0];
      state.activeFont = defaultFont;
    },
  },
  actions: {
    setActiveFont(context, font) {
      context.commit('setActiveFont', font);
    },
    setDefaultActiveFont(context) {
      context.commit('setDefaultActiveFont');
    },
  },
};
