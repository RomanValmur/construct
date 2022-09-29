export default {
  state: {
    textValue: '',
    fontSize: 72,
    lineHeight: 72,
  },
  getters: {
    textValue(state) {
      return state.textValue;
    },
    notNullTextValue(state) {
      return state.textValue ? state.textValue : 'Введите текст';
    },
    fontSize(state) {
      return state.fontSize;
    },
    lineHeight(state) {
      return state.lineHeight;
    },
  },
  mutations: {
    updateTextValue(state, value) {
      state.textValue = value;
    },
    updateFontSize(state, value) {
      state.fontSize = +value;
    },
    updateLineHeight(state, value) {
      state.lineHeight = +value;
    },
  },
  actions: {
    updateTextValue(context, value) {
      context.commit('updateTextValue', value);
    },
    updateFontSize(context, value) {
      context.commit('updateFontSize', value);
    },
    updateLineHeight(context, value) {
      context.commit('updateLineHeight', value);
    },
  },
};
