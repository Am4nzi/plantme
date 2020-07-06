import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepperText: {},
    menus: {
      headingText: {},
      currentMenu: [],
      plantSize: [],
      lightLevel: [],
      easeOfCare: [],
      petSafe: []
    }
  },
  mutations: {
    setCurrentMenu(state, currentMenuData) {
      state.menus.currentMenu = currentMenuData;
    },
    setMenuHeadingText(state, headingText) {
      state.menus.headingText = headingText;
    },
    setLightLevelMenu(state, lightLevelData) {
      state.menus.lightLevel = lightLevelData;
    },
    setPetSafeMenu(state, petSafeData) {
      state.menus.petSafe = petSafeData;
    },
    setPlantSizeMenu(state, plantSizeData) {
      state.menus.plantSize = plantSizeData;
    },
    setEaseOfCareMenu(state, easeOfCareData) {
      state.menus.easeOfCare = easeOfCareData;
    },
    setStepperText(state, stepperText) {
      state.stepperText = stepperText;
    }
  },
  actions: {
    updateCurrentMenu({ commit }, currentMenuData) {
      commit('setCurrentMenu', currentMenuData);
    },
    updateMenuHeadingText({ commit }, headingText) {
      commit('setMenuHeadingText', headingText);
    },
    updatePetSafeMenu({ commit }, petSafeData) {
      commit('setPetSafeMenu', petSafeData);
    },
    updatePlantSizeMenu({ commit }, plantSizeData) {
      commit('setPlantSizeMenu', plantSizeData);
    },
    updateLightLevelMenu({ commit }, lightLevelData) {
      commit('setLightLevelMenu', lightLevelData);
    },
    updateEaseOfCareMenu({ commit }, easeOfCareData) {
      commit('setEaseOfCareMenu', easeOfCareData);
    },
    updateStepperText({ commit }, setStepperText) {
      commit('setStepperText', setStepperText);
    },
  },
  modules: {}
});
