import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepperText: {},
    menus: {
      index: '',
      headingText: {},
      currentMenu: [],
      plantSize: [],
      lightLevel: [],
      easeOfCare: [],
      petSafe: []
    },
    menuSelection: {
      plantSize: '',
      lightLevel: '',
      easeOfCare: '',
      petSafe: ''
    }
  },
  mutations: {
    setCurrentMenu(state, currentMenuData) {
      state.menus.currentMenu = currentMenuData;
    },
    setMenuIndex(state, menuIndex) {
      state.menus.index = menuIndex;
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
    },
    setPlantMenuSelection(state, plantSizeMenuSelection) {
      state.menuSelection.plantSize = plantSizeMenuSelection;
    },
    setLightLevelMenuSelection(state, lightLevelMenuSelection) {
      state.menuSelection.lightLevel = lightLevelMenuSelection;
    },
    setEaseOfCareMenuSelection(state, easeOfCareMenuSelection) {
      state.menuSelection.easeOfCare = easeOfCareMenuSelection;
    },
    setPetSafeMenuSelection(state, petSafeMenuSelection) {
      state.menuSelection.petSafe = petSafeMenuSelection;
    }
  },
  actions: {
    updateMenuIndex({ commit }, menuIndex) {
      commit('setMenuIndex', menuIndex);
    },
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
    updatePlantSizeMenuSelection({ commit }, plantSizeMenuSelection) {
      commit('setPlantMenuSelection', plantSizeMenuSelection);
    },
    updateLightLevelMenuSelection({ commit }, lightLevelMenuSelection) {
      commit('setPlantMenuSelection', lightLevelMenuSelection);
    },
    updateEaseOfCareMenuSelection({ commit }, easeOfCareMenuSelection) {
      commit('setPlantMenuSelection', easeOfCareMenuSelection);
    },
    updatePetSafeMenuSelection({ commit }, petSafeMenuSelection) {
      commit('setPlantMenuSelection', petSafeMenuSelection);
    },
  },
  modules: {}
});
