export default {
  state: {
    textFormCode: 'fields[UF_CRM_1664187394]',
    colorFormCode: 'fields[UF_CRM_1664187413]',
    fontSizeFormCode: 'fields[UF_CRM_1664187438]',
    fontNameFormCode: 'fields[UF_CRM_1664276295]',
    bitrixDomen: 'b24-mydy4e',
    bitrixUserId: '1',
    bitrixToken: 'vwcq63ft1wnt8w66',
  },
  getters: {
    bitrixBaseUrl(state) {
      return `https://${state.bitrixDomen}.bitrix24.ru/rest/${state.bitrixUserId}/${state.bitrixToken}/crm.deal.add.json`;
    },
    dealAddUrl(state, getters) {
      return `https://${state.bitrixDomen}.bitrix24.ru/rest/${state.bitrixUserId}/${state.bitrixToken}/crm.deal.add.json?${state.textFormCode}=${getters.textValue}&${state.colorFormCode}=${getters.activeColor.title}&${state.fontSizeFormCode}=${getters.fontSize}&${state.fontNameFormCode}=${getters.activeFont.name}`;
    },
  },
  mutations: {
  },
  actions: {
  },
};
