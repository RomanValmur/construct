export default {
  state: {
    clientDeviceWidth: window.innerWidth,
  },
  getters: {
    clientDeviceWidth(state) {
      return state.clientDeviceWidth;
    },
    clientDeviceWidthCoefficient(state) {
      const { clientDeviceWidth } = state;
      let coefficient = '';

      if (clientDeviceWidth >= 576) {
        coefficient = 510 / 600;
      }

      if (clientDeviceWidth >= 768) {
        coefficient = 1;
      }

      if (clientDeviceWidth >= 992) {
        coefficient = 1;
      }

      if (clientDeviceWidth >= 1200) {
        coefficient = 1;
      }

      if (clientDeviceWidth < 576) {
        coefficient = clientDeviceWidth / 600;
      }

      return coefficient;
    },
  },
  mutations: {
    updateClientDeviceWidth(state) {
      state.clientDeviceWidth = window.innerWidth;
    },
  },
  actions: {
    updateClientDeviceWidth(context) {
      context.commit('updateClientDeviceWidth');
    },
  },
};
