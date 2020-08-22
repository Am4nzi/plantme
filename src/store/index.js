import Vue from "vue";
import Vuex from "vuex";

//createPersistedState preserves state on refresh
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

let dataBaseUrl = "";

if (window.location.href.includes("localhost")) {
  dataBaseUrl = "http://localhost:3000/api";
} else dataBaseUrl = "/api";

export default new Vuex.Store({
  state: {
    filteredResults: {},
    hasScrolled: false,
    initialViewDataLoaded: false,
    menuData: {
      plantSize: [],
      lightLevel: [],
      easeOfCare: [],
      petSafe: [],
      indexNumber: 0,
      menuTitles: [],
      guideTitles: []
    },
    userSelections: {
      indexes: {
        plantSizeMenu: [],
        lightLevelMenu: [],
        easeOfCareMenu: [],
        petSafeMenu: null
      },
      titles: {
        plantSizeMenu: [],
        lightLevelMenu: [],
        easeOfCareMenu: [],
        petSafeMenu: []
      },
    },
    modal: {
      isActive: true,
      closedOnce: false
    },
    plantsData: {},
    stepperActiveStep: 1,
    stepperStepNumber: 4,
    stepperText: [],
  },
  getters: {
    initialViewDataLoaded: state => state.initialViewDataLoaded,
    getMenuTitles: state => state.menuData.menuTitles,
    getUserSelectionsForFilter: function(state) {
      return state.userSelections.indexes;
    },
    getUserSelectionIndexes: function(state) {
      return state.userSelections.indexes;
    },
    getHasScrolled: function(state) {
      return state.hasScrolled;
    },
    getMenuData: function(state) {
      return state.menuData;
    },
    getMenuIndexNumber: function(state) {
      return state.menuData.indexNumber;
    },
      getUserSelections: function(state) {
      return state.userSelections;
    },
    getStepperActiveStep: function(state) {
      return state.stepperActiveStep;
    },
    getStepperStepNumber: function(state) {
      return state.stepperStepNumber;
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
    getFilteredResults: function(state) {
      return state.filteredResults;
    }
  },
  mutations: {
    //Data set on initial loadS********************************
    setModalActive: (state, modalStatus) =>
      (state.modal.isActive = modalStatus),
    setMenuTitles: (state, menuTitles) =>
      (state.menuData.menuTitles = menuTitles),
    setGuideTitles: (state, guideTitles) =>
      Vue.set(state, "menus.guideTitles", guideTitles),
    setStepperText: (state, stepperText) =>
      Vue.set(state, "stepperText", stepperText),
    setInitialViewDataLoaded: (state, status) =>
      Vue.set(state, "initialViewDataLoaded", status),
    //Set Menu Selection OPTIONS********************************
    setPlantSizeMenuSelectionOptions: (state, plantSizeData) =>
      (state.menuData.plantSize = plantSizeData),
    setLightLevelMenuSelectionOptions: (state, lightLevelData) =>
      (state.menuData.lightLevel = lightLevelData),
    setEaseOfCareMenuSelectionOptions: (state, easeOfCareData) =>
      (state.menuData.easeOfCare = easeOfCareData),
    setPetSafeMenuSelectionOptions: (state, petSafeData) =>
      (state.menuData.petSafe = petSafeData),
    //Set Menu User Selection INDEXES****************************
    setPlantSizeMenuUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelections.indexes.plantSizeMenu = selectionIndexes),
    setLightLevelUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelections.indexes.lightLevelMenu = selectionIndexes),
    setEaseOfCareUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelections.indexes.easeOfCareMenu = selectionIndexes),
    setPetSafeUserSelectionIndexes: (state, selectionIndexes) =>
      (state.userSelections.indexes.petSafeMenu = selectionIndexes),
    //Set Menu User Selection TITLES****************************
    //Titles are linked to index numbers to keep two-way data binding (item-groups and chip-groups) in sync.
    //TODO Reduce code repetition
    setPlantSizeMenuUserSelectionTitles: state => {
      let plantSizeMenuTitles = [];
      state.userSelections.indexes.plantSizeMenu.sort();
      state.userSelections.indexes.plantSizeMenu.forEach(indexNumber => {
        switch (indexNumber) {
          case 0:
            plantSizeMenuTitles.push(state.menuData.plantSize[0].cardtitle);
            break;
          case 1:
            plantSizeMenuTitles.push(state.menuData.plantSize[1].cardtitle);
            break;
          case 2:
            plantSizeMenuTitles.push(state.menuData.plantSize[2].cardtitle);
            break;
          default:
            return "Error in setPlantSizeMenuUserSelectionTitles";
        }
      });
      state.userSelections.titles.plantSizeMenu = plantSizeMenuTitles;
    },
    setLightLevelMenuUserSelectionTitles: state => {
      let lightLevelMenuTitles = [];
      state.userSelections.indexes.lightLevelMenu.sort();
      state.userSelections.indexes.lightLevelMenu.forEach(indexNumber => {
        switch (indexNumber) {
          case 0:
            lightLevelMenuTitles.push(state.menuData.lightLevel[0].cardtitle);
            break;
          case 1:
            lightLevelMenuTitles.push(state.menuData.lightLevel[1].cardtitle);
            break;
          case 2:
            lightLevelMenuTitles.push(state.menuData.lightLevel[2].cardtitle);
            break;
          case 3:
            lightLevelMenuTitles.push(state.menuData.lightLevel[3].cardtitle);
            break;
          case 4:
            lightLevelMenuTitles.push(state.menuData.lightLevel[4].cardtitle);
            break;
          default:
            return "Error in setPlantSizeMenuUserSelectionTitles";
        }
      });
      state.userSelections.titles.lightLevelMenu = lightLevelMenuTitles;
    },
    setEaseOfCareMenuUserSelectionTitles: state => {
      let easeOfCareMenuTitles = [];
      state.userSelections.indexes.easeOfCareMenu.sort();
      state.userSelections.indexes.easeOfCareMenu.forEach(indexNumber => {
        switch (indexNumber) {
          case 0:
            easeOfCareMenuTitles.push(state.menuData.easeOfCare[0].cardtitle);
            break;
          case 1:
            easeOfCareMenuTitles.push(state.menuData.easeOfCare[1].cardtitle);
            break;
          case 2:
            easeOfCareMenuTitles.push(state.menuData.easeOfCare[2].cardtitle);
            break;
          default:
            return "Error in setPlantSizeMenuUserSelectionTitles";
        }
      });
      state.userSelections.titles.easeOfCareMenu = easeOfCareMenuTitles;
    },
    setPetSafeMenuUserSelectionTitles: state => {
      let petSafeMenuTitles = [];
      switch (state.userSelections.indexes.petSafeMenu) {
        case 0:
          petSafeMenuTitles.push(state.menuData.petSafe[0].cardtitle);
          break;
        case 1:
          petSafeMenuTitles.push(state.menuData.petSafe[1].cardtitle);
          break;
        default:
          return "Error in setPlantSizeMenuUserSelectionTitles";
      }
      state.userSelections.titles.petSafeMenu = petSafeMenuTitles;
    },
    setMenuIndexNumber: (state, indexNumber) => {
      state.menuData.indexNumber = indexNumber;
    },
    setStepperActiveStep: (state, stepNumber) => {
      state.stepperActiveStep = stepNumber;
    },
    setPlantLibraryData: (state, plantsData) => {
      Vue.set(state, "plantsData", plantsData);
    },
    setModalClosedOnce: (state, modalStatus) => {
      Vue.set(state, "modal.closedOnce", modalStatus);
    },
    setFilteredResults: (state, filteredResults) => {
      Vue.set(state, "filteredResults", filteredResults);
    },
    setHasScrolled: (state, scrollStatus) => {
      state.hasScrolled = scrollStatus;
    }
  },
  actions: {
    updateHasScrolled(context, scrollStatus) {
      context.commit("setHasScrolled", scrollStatus);
    },
    updateModalActive(context, modalStatus) {
      context.commit("setModalActive", modalStatus);
    },
    updateMenuIndexNumber(context, indexNumber) {
      context.commit("setMenuIndexNumber", indexNumber);
    },
    updateStepperActiveStep(context, indexNumber) {
      context.commit("setStepperActiveStep", indexNumber);
    },
    updateModalClosedOnce(context, modalStatus) {
      context.commit("setModalClosedOnce", modalStatus);
    },
    updateFilteredResults(context, filteredResults) {
      context.commit("setFilteredResults", filteredResults);
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
  plugins: [createPersistedState()]
});