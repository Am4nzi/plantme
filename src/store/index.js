import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: {
      plantSize: [],
    }
  },
  mutations: {
    setPlantSizeMenu(state, plantSizeData) {
      state.menus.plantSize = plantSizeData;
    }
  },
  actions: {
    updatePlantSizeMenu({ commit }, plantSizeData) {
      commit('setPlantSizeMenu', plantSizeData);
    },
  },
  modules: {}
});
