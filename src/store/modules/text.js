export default {
  state: {
    textValue: 'Пример',
    fontSize: '72',
    lineHeight: '72',
  },
  getters: {
    textValue(state) {
      return state.textValue;
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
      state.fontSize = value;
    },
    updateLineHeight(state, value) {
      state.lineHeight = value;
    },
  },
  actions: {
    updateTextValue(context, value) {
      context.commit('updateTextValue', value);
    },
    updateFontSize(context, event) {
      context.commit('updateFontSize', event.target.value);
    },
    updateLineHeight(context, event) {
      context.commit('updateLineHeight', event.target.value);
    },
  },
};
