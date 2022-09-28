import surfaces from '@/data/surfaces';

export default {
  state: {
    surfaces,
    activeSurface: surfaces[0],
  },
  getters: {
    surfaces(state) {
      return state.surfaces;
    },
    activeSurface(state) {
      return state.activeSurface;
    },
    activeSurfaceImage(state) {
      return state.activeSurface.image;
    },
  },
  mutations: {
    setActiveSurface(state, surface) {
      state.activeSurface = surface;
    },
  },
  actions: {
    setActiveSurface(context, surface) {
      context.commit('setActiveSurface', surface);
    },
  },
};
