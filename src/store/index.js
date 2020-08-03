import Vue from "vue";
import Vuex from "vuex";

//createPersistedState preserves state on refresh
import createPersistedState from "vuex-persistedstate";

//Data that requires persistence is stored separately in below modules
import menu from "./modules/menu";
import menuSelections from "./modules/menuSelections";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepperText: {},
    menus: {
      currentMenu: [],
      plantSize: [],
      lightLevel: [],
      easeOfCare: [],
      petSafe: []
    },
    expansionPanelText: {},
    hasScrolled: null
  },
  getters: {
    getExpansionPanelText: function(state) {
      return state.expansionPanelText;
    },
    getMenuData: function(state) {
      return state.menus;
    },
    getMenuIndexNumber: function(state) {
      return state.menu.indexNumber;
    },
    getMenuTitle: function(state) {
      return state.menu.menuTitle;
    },
    getPreviousMenuSelection: function(state) {
      return state.menuSelections.menuSelection;
    },
    getHasScrolled: function(state) {
      return state.hasScrolled;
    },
    getStepperText: function(state) {
      return state.stepperText;
    },
  },
  mutations: {
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
    setExpansionPanelText(state, expansionPanelText) {
      state.expansionPanelText = expansionPanelText;
    },
    setHasScrolled(state, scrollStatus) {
      state.hasScrolled = scrollStatus;
    }
  },
  actions: {
    updateMenuHeadingText({ commit }, headingText) {
      commit("setMenuHeadingText", headingText);
    },
    updatePetSafeMenu({ commit }, petSafeData) {
      commit("setPetSafeMenu", petSafeData);
    },
    updatePlantSizeMenu({ commit }, plantSizeData) {
      commit("setPlantSizeMenu", plantSizeData);
    },
    updateLightLevelMenu({ commit }, lightLevelData) {
      commit("setLightLevelMenu", lightLevelData);
    },
    updateEaseOfCareMenu({ commit }, easeOfCareData) {
      commit("setEaseOfCareMenu", easeOfCareData);
    },
    updateStepperText({ commit }, setStepperText) {
      commit("setStepperText", setStepperText);
    },
    updateExpansionPanelText({ commit }, expansionPanelText) {
      commit("setExpansionPanelText", expansionPanelText);
    },
    updateHasScrolled({ commit }, scrollStatus) {
      commit("setHasScrolled", scrollStatus);
    }
  },
  modules: {
    menu,
    menuSelections
  },
  plugins: [createPersistedState()]
});
