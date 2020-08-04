import Vue from "vue";
import Vuex from "vuex";

//createPersistedState preserves state on refresh
import createPersistedState from "vuex-persistedstate";

//Data that requires persistence is stored separately in below modules
import menu from "./modules/menu";
import menuSelections from "./modules/menuSelections";

Vue.use(Vuex);

let dataBaseUrl = "";

if (window.location.href.includes("localhost")) {
  dataBaseUrl = "http://localhost:3000/api";
} else dataBaseUrl = "/api";

export default new Vuex.Store({
  state: {
    expansionPanelText: {},
    hasScrolled: null,
    menus: {
      currentMenu: [],
      plantSize: [],
      lightLevel: [],
      easeOfCare: [],
      petSafe: []
    },
    stepperText: {}
  },
  getters: {
    getExpansionPanelText: function(state) {
      return state.expansionPanelText;
    },
    getHasScrolled: function(state) {
      return state.hasScrolled;
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
    getStepperText: function(state) {
      return state.stepperText;
    }
  },
  mutations: {
    setEaseOfCareMenu(state, easeOfCareData) {
      state.menus.easeOfCare = easeOfCareData;
    },
    setExpansionPanelText(state, expansionPanelText) {
      state.expansionPanelText = expansionPanelText;
    },
    setHasScrolled(state, scrollStatus) {
      state.hasScrolled = scrollStatus;
    },
    setLightLevelMenu(state, lightLevelData) {
      state.menus.lightLevel = lightLevelData;
    },
    setMenuHeadingText(state, headingText) {
      state.menus.headingText = headingText;
    },
    setPetSafeMenu(state, petSafeData) {
      state.menus.petSafe = petSafeData;
    },
    setPlantSizeMenu(state, plantSizeData) {
      state.menus.plantSize = plantSizeData;
    },
    setStepperText(state, stepperText) {
      state.stepperText = stepperText;
    }
  },
  actions: {
    updateExpansionPanelText({ commit }, expansionPanelText) {
      commit("setExpansionPanelText", expansionPanelText);
    },
    updateHasScrolled({ commit }, scrollStatus) {
      commit("setHasScrolled", scrollStatus);
    },
    updateMenuEaseOfCare: context => {
      Vue.axios
        .get(`${dataBaseUrl}/easeofcaremenudata`)
        .then(response => {
          let easeOfCareData = response.data;
          context.commit("setEaseOfCareMenu", easeOfCareData);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateMenuHeadingText({ commit }, headingText) {
      commit("setMenuHeadingText", headingText);
    },
    updateMenuIndex: context => {
      context.commit("setMenuIndex", 1);
    },
    updateMenuLightLevel: context => {
      Vue.axios
        .get(`${dataBaseUrl}/lightlevelmenudata`)
        .then(response => {
          let lightLevelData = response.data;
          context.commit("setLightLevelMenu", lightLevelData);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateMenuPetSafe: context => {
      Vue.axios
        .get(`${dataBaseUrl}/petsafemenudata`)
        .then(response => {
          let petSafeData = response.data;
          context.commit("setPetSafeMenu", petSafeData);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateMenuPlantSize: context => {
      Vue.axios
        .get(`${dataBaseUrl}/sizemenudata`)
        .then(response => {
          let plantSizeData = response.data;
          context.commit("setPlantSizeMenu", plantSizeData);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateStepperText({ commit }, setStepperText) {
      commit("setStepperText", setStepperText);
    }
  },
  modules: {
    menu,
    menuSelections
  },
  plugins: [createPersistedState()]
});
