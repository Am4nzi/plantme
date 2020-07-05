import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepperText: {},
    menus: {
      headingText: '',
      plantSize: [],
    }
  },
  mutations: {
    setMenuHeadingText(state, headingText) {
      state.menus.headingText = headingText;
    },
    setPlantSizeMenu(state, plantSizeData) {
      state.menus.plantSize = plantSizeData;
    },
    setStepperText(state, stepperText) {
      state.stepperText = stepperText;
    }
  },
  actions: {
    updateMenuHeadingText({ commit }, headingText) {
      commit('setMenuHeadingText', headingText);
    },
    updatePlantSizeMenu({ commit }, plantSizeData) {
      commit('setPlantSizeMenu', plantSizeData);
    },
    updateStepperText({ commit }, setStepperText) {
      commit('setStepperText', setStepperText);
    },
  },
  modules: {}
});
