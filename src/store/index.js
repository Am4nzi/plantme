import Vue from "vue";
import Vuex from "vuex";

//createPersistedState preserves state on refresh
import createPersistedState from "vuex-persistedstate";

//Data that requires persistence is stored separately in below modules
import menuSelections from "./modules/menuSelections";
import menuTitleStore from "./modules/menuTitleStore";

Vue.use(Vuex);

let dataBaseUrl = "";

if (window.location.href.includes("localhost")) {
  dataBaseUrl = "http://localhost:3000/api";
} else dataBaseUrl = "/api";

export default new Vuex.Store({
  state: {
    initialViewDataLoaded: false,
    userSelectionIndexes: {
      plantSizeMenu: [],
      lightLevelMenu: [],
      easeOfCareMenu: [],
      petSafeMenu: null
    },
    hasScrolled: false,
    stepperHasActivated: {
      plantSize: false,
      lightLevel: false,
      easeOfCare: false,
      petSafe: false
    },
    menus: {
      currentMenu: [],
      plantSize: [],
      lightLevel: [],
      easeOfCare: [],
      petSafe: [],
      indexNumber: 1,
      menuTitles: [],
      guideTitles: []
    },
    stepperText: [],
    modal: {
      isActive: true,
      closedOnce: false
    },
    plantsData: {},
    plantsDataSingleArray: {
      name: ""
    },
    filteredSelection: {}
  },
  getters: {
    initialViewDataLoaded: state => state.initialViewDataLoaded,
    getMenuTitles: state => state.menuTitleStore.menuTitles,
    getUserSelectionsForFilter: function(state) {
      return state.userSelectionIndexes;
    },
    getHasScrolled: function(state) {
      return state.hasScrolled;
    },
    getStepperHasActivated: function(state) {
      return state.stepperHasActivated;
    },
    getMenuData: function(state) {
      return state.menus;
    },
    getMenuIndexNumber: function(state) {
      return state.menus.indexNumber;
    },
    getPreviousMenuSelection: function(state) {
      return state.menuSelections.menuSelection;
    },
    getMenuSelection: function(state) {
      return state.menuSelections.menuSelection;
    },
    getStepperText: function(state) {
      return state.stepperText;
    },
    getModalStatus: function(state) {
      return state.modal.isActive;
    },
    getModalClosedOnce: function(state) {
      return state.modal.closedOnce;
    },
    getPlantsData: function(state) {
      return state.plantsData;
    },
    getFilteredSelection: function(state) {
      return state.filteredSelection;
    }
  },
  mutations: {
    //Data set on initial loadS********************************
    setModalActive: (state, modalStatus) =>
      Vue.set(state, "modal.isActive", modalStatus),
    setMenuTitles: (state, menuTitles) =>
      (state.menuTitleStore.menuTitles = menuTitles),
    setGuideTitles: (state, guideTitles) =>
      Vue.set(state, "menus.guideTitles", guideTitles),
    setStepperText: (state, stepperText) =>
      Vue.set(state, "stepperText", stepperText),
    setInitialViewDataLoaded: (state, status) =>
      Vue.set(state, "initialViewDataLoaded", status),
    //Set Menu Selection OPTIONS********************************
    setPlantSizeMenuSelectionOptions: (state, plantSizeData) =>
      (state.menus.plantSize = plantSizeData),
    setLightLevelMenuSelectionOptions: (state, lightLevelData) =>
      (state.menus.lightLevel = lightLevelData),
    setEaseOfCareMenuSelectionOptions: (state, easeOfCareData) =>
      (state.menus.easeOfCare = easeOfCareData),
    setPetSafeMenuSelectionOptions: (state, petSafeData) =>
      (state.menus.petSafe = petSafeData),
    //Set Menu User Selection INDEXES****************************
    setPlantSizeMenuUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelectionIndexes.plantSizeMenu = selectionIndexes),
    setLightLevelUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelectionIndexes.lightLevelMenu = selectionIndexes),
    setEaseOfCareUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelectionIndexes.easeOfCareMenu = selectionIndexes),
    setPetSafeUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelectionIndexes.petSafeMenu = selectionIndexes),
    //Set Menu User Selection TITLES****************************
    //Titles are linked to index numbers to keep two-way data binding (item-groups and chip-groups) in sync.
    //TODO Reduce code repetition
    setPlantSizeMenuUserSelectionTitles: state => {
      let plantSizeMenuTitles = [];
      state.userSelectionIndexes.plantSizeMenu.sort();
      state.userSelectionIndexes.plantSizeMenu.forEach(indexNumber => {
        switch (indexNumber) {
          case 0:
            plantSizeMenuTitles.push(state.menus.plantSize[0].cardtitle);
            break;
          case 1:
            plantSizeMenuTitles.push(state.menus.plantSize[1].cardtitle);
            break;
          case 2:
            plantSizeMenuTitles.push(state.menus.plantSize[2].cardtitle);
            break;
          default:
            return "Error in setPlantSizeMenuUserSelectionTitles";
        }
      });
      state.menuSelections.menuSelection.plantSize.titles = plantSizeMenuTitles;
    },
    setLightLevelMenuUserSelectionTitles: state => {
      let lightLevelMenuTitles = [];
      state.userSelectionIndexes.lightLevelMenu.sort();
      state.userSelectionIndexes.lightLevelMenu.forEach(indexNumber => {
        switch (indexNumber) {
          case 0:
            lightLevelMenuTitles.push(state.menus.lightLevel[0].cardtitle);
            break;
          case 1:
            lightLevelMenuTitles.push(state.menus.lightLevel[1].cardtitle);
            break;
          case 2:
            lightLevelMenuTitles.push(state.menus.lightLevel[2].cardtitle);
            break;
          case 3:
            lightLevelMenuTitles.push(state.menus.lightLevel[3].cardtitle);
            break;
          case 4:
            lightLevelMenuTitles.push(state.menus.lightLevel[4].cardtitle);
            break;
          default:
            return "Error in setPlantSizeMenuUserSelectionTitles";
        }
      });
      state.menuSelections.menuSelection.lightLevel.titles = lightLevelMenuTitles;
    },
    setEaseOfCareMenuUserSelectionTitles: state => {
      let easeOfCareMenuTitles = [];
      state.userSelectionIndexes.easeOfCareMenu.sort();
      state.userSelectionIndexes.easeOfCareMenu.forEach(indexNumber => {
        switch (indexNumber) {
          case 0:
            easeOfCareMenuTitles.push(state.menus.easeOfCare[0].cardtitle);
            break;
          case 1:
            easeOfCareMenuTitles.push(state.menus.easeOfCare[1].cardtitle);
            break;
          case 2:
            easeOfCareMenuTitles.push(state.menus.easeOfCare[2].cardtitle);
            break;
          default:
            return "Error in setPlantSizeMenuUserSelectionTitles";
        }
      });
      state.menuSelections.menuSelection.easeOfCare.titles = easeOfCareMenuTitles;
    },
    setPetSafeMenuUserSelectionTitles: state => {
      let petSafeMenuTitles = [];
      switch (state.userSelectionIndexes.petSafeMenu) {
        case 0:
          petSafeMenuTitles.push(state.menus.petSafe[0].cardtitle);
          break;
        case 1:
          petSafeMenuTitles.push(state.menus.petSafe[1].cardtitle);
          break;
        default:
          return "Error in setPlantSizeMenuUserSelectionTitles";
      }
      state.menuSelections.menuSelection.petSafe.titles = petSafeMenuTitles;
    },
    setMenuIndex: (state, indexNumber) => {
      Vue.set(state, "menus.indexNumber", indexNumber);
    },
    setStepperHasActivatedPlantSize: (state, stepperActiveStatus) => {
      state.stepperHasActivated.plantSize = stepperActiveStatus;
    },
    setStepperHasActivatedLightLevel: (state, stepperActiveStatus) => {
      state.stepperHasActivated.lightLevel = stepperActiveStatus;
    },
    setStepperHasActivatedEaseOfCare: (state, stepperActiveStatus) => {
      state.stepperHasActivated.easeOfCare = stepperActiveStatus;
    },
    setStepperHasActivatedPetSafe: (state, stepperActiveStatus) => {
      state.stepperHasActivated.petSafe = stepperActiveStatus;
    },
    setPlantLibraryData: (state, plantsData) => {
      Vue.set(state, "plantsData", plantsData);
    },
    setModalClosedOnce: (state, modalStatus) => {
      Vue.set(state, "modal.closedOnce", modalStatus);
    },
    setFilteredSelection: (state, filteredSelection) => {
      Vue.set(state, "filteredSelection", filteredSelection);
    },
    setHasScrolled: (state, scrollStatus) => {
      state.hasScrolled = scrollStatus;
    }
  },
  actions: {
    updateHasScrolled(context, scrollStatus) {
      context.commit("setHasScrolled", scrollStatus);
    },
    updateStepperHasActivated(context, stepperActiveStatus) {
      if (stepperActiveStatus === "plantSize") {
        context.commit("setStepperHasActivatedPlantSize", stepperActiveStatus);
      }
      if (stepperActiveStatus === "lightLevel") {
        context.commit("setStepperHasActivatedLightLevel", stepperActiveStatus);
      }
      if (stepperActiveStatus === "easeOfCare") {
        context.commit("setStepperHasActivatedEaseOfCare", stepperActiveStatus);
      }
      if (stepperActiveStatus === "petSafe") {
        context.commit("setStepperHasActivatedPetSafe", stepperActiveStatus);
      }
    },
    updateModalActive(context, modalStatus) {
      context.commit("setModalActive", modalStatus);
    },
    updateModalClosedOnce(context, modalStatus) {
      context.commit("setModalClosedOnce", modalStatus);
    },
    updateFilteredSelection(context, filteredSelection) {
      context.commit("setFilteredSelection", filteredSelection);
    },
    async updatePlantLibraryData(context) {
      let plantsData = await Vue.axios.get(`${dataBaseUrl}/plantsdata`);
      context.commit("setPlantLibraryData", plantsData.data);
    },
    async updateInitialViewData(context) {
      let menuTitles = await Vue.axios.get(`${dataBaseUrl}/menutitles`);
      context.commit("setMenuTitles", menuTitles.data);
      let guideTitles = await Vue.axios.get(`${dataBaseUrl}/guideTitles`);
      context.commit("setGuideTitles", guideTitles.data);
      let stepperText = await Vue.axios.get(`${dataBaseUrl}/steppertext`);
      context.commit("setStepperText", stepperText.data);
      let plantSizeData = await Vue.axios.get(`${dataBaseUrl}/sizemenudata`);
      context.commit("setPlantSizeMenuSelectionOptions", plantSizeData.data);
      context.commit("setInitialViewDataLoaded", true);
    },
    async updateViewLightLevelMenu(context) {
      let lightLevelData = await Vue.axios.get(
        `${dataBaseUrl}/lightlevelmenudata`
      );
      context.commit("setLightLevelMenuSelectionOptions", lightLevelData.data);
    },
    async updateViewEaseOfCareMenu(context) {
      let easeOfCareData = await Vue.axios.get(
        `${dataBaseUrl}/easeofcaremenudata`
      );
      context.commit("setEaseOfCareMenuSelectionOptions", easeOfCareData.data);
    },
    async updateViewPetSafeMenu(context) {
      let petSafeData = await Vue.axios.get(`${dataBaseUrl}/petsafemenudata`);
      context.commit("setPetSafeMenuSelectionOptions", petSafeData.data);
    }
  },
  modules: {
    menuSelections,
    menuTitleStore
  },
  plugins: [createPersistedState()]
});
