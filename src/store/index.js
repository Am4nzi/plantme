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
    hasScrolled: null,
    menus: {
      currentMenu: [],
      plantSize: [],
      lightLevel: [],
      easeOfCare: [],
      petSafe: [],
      guideText: [],
      guideTitles: []
    },
    stepperText: []
  },
  getters: {
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
    getMenuTitles: function(state) {
      return state.menu.menuTitles;
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
    setHasScrolled(state, scrollStatus) {
      state.hasScrolled = scrollStatus;
    },
    setGuideText(state, guideText) {
      state.menus.guideText = guideText;
    },
    setGuideTitles(state, guideTitles) {
      state.menus.guideTitles = guideTitles;
    },
    setLightLevelMenu(state, lightLevelData) {
      state.menus.lightLevel = lightLevelData;
    },
    setMenuHeadingText(state, headingText) {
      state.menus.headingText = headingText;
    },
    setMenuTitles(state, menuTitles) {
      state.menu.menuTitles = menuTitles;
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
    updateGuideText({ commit }, guideText) {
      commit("setGuideText", guideText);
    },
    updateHasScrolled({ commit }, scrollStatus) {
      commit("setHasScrolled", scrollStatus);
    },
    async updateMenuEaseOfCare(context) {
      let easeOfCareData = await Vue.axios.get(
        `${dataBaseUrl}/easeofcaremenudata`
      );
      context.commit("setEaseOfCareMenu", easeOfCareData.data);
    },
    updateMenuHeadingText({ commit }, headingText) {
      commit("setMenuHeadingText", headingText);
    },
    updateMenuIndex: context => {
      context.commit("setMenuIndex", 1);
    },
    async updateMenuLightLevel(context) {
      let lightLevelData = await Vue.axios.get(
        `${dataBaseUrl}/lightlevelmenudata`
      );
      context.commit("setLightLevelMenu", lightLevelData.data);
    },
    async updateMenuPetSafe(context) {
      let petSafeData = await Vue.axios.get(`${dataBaseUrl}/petsafemenudata`);
      context.commit("setPetSafeMenu", petSafeData.data);
    },
    async updateMenuPlantSize(context) {
      let plantSizeData = await Vue.axios.get(`${dataBaseUrl}/sizemenudata`);
      context.commit("setPlantSizeMenu", plantSizeData.data);
    },
    async updateMenuTitles(context) {
      let menuTitles = await Vue.axios.get(`${dataBaseUrl}/menutitles`);
      context.commit("setMenuTitles", menuTitles.data);
    },
    updateInitialMenuTitle({ commit }, initialMenuTitle) {
      commit("setMenuTitle", initialMenuTitle);
    },
    async updateGuideTitles(context) {
      let guideTitles = await Vue.axios.get(`${dataBaseUrl}/guideTitles`);
      context.commit("setGuideTitles", guideTitles.data);
    },
    async updateStepperText(context) {
      let stepperText = await Vue.axios.get(`${dataBaseUrl}/steppertext`);
      context.commit("setStepperText", stepperText.data);
    }
  },
  modules: {
    menu,
    menuSelections
  },
  plugins: [createPersistedState()]
});
