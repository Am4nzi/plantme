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
      }
    },
    modal: {
      isActive: true,
      closedOnce: false
    },
    navDrawer: {
      isActive: true
    },
    plantsData: {},
    stepperActiveStep: 1,
    stepperStepNumber: 4,
    stepperText: []
  },

  getters: {
    getFilteredResults: state => state.filteredResults,
    getHasScrolled: state => state.hasScrolled,
    getMenuData: state => state.menuData,
    getMenuIndexNumber: state => state.menuData.indexNumber,
    getMenuTitles: state => state.menuData.menuTitles,
    getModalClosedOnce: state => state.modal.closedOnce,
    getModalStatus: state => state.modal.isActive,
    getNavDrawerStatus: state => state.navDrawer.isActive,
    getPlantsData: state => state.plantsData,
    getStepperActiveStep: state => state.stepperActiveStep,
    getStepperStepNumber: state => state.stepperStepNumber,
    getStepperText: state => state.stepperText,
    getUserSelectionIndexes: state => state.userSelections.indexes,
    getUserSelections: state => state.userSelections,
    initialViewDataLoaded: state => state.initialViewDataLoaded
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
    setPlantSizeMenuUserSelectionTitles: (state, plantSizeMenuTitles) => {
      state.userSelections.titles.plantSizeMenu = plantSizeMenuTitles;
    },
    setLightLevelMenuUserSelectionTitles: (state, lightLevelMenuTitles) => {
      state.userSelections.titles.lightLevelMenu = lightLevelMenuTitles;
    },
    setEaseOfCareMenuUserSelectionTitles: (state, easeOfCareMenuTitles) => {
      state.userSelections.titles.easeOfCareMenu = easeOfCareMenuTitles;
    },
    setPetSafeMenuUserSelectionTitles: (state, petSafeMenuTitles) => {
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
      state.modal.closedOnce = modalStatus;
    },
    setFilteredResults: (state, filteredResults) => {
      Vue.set(state, "filteredResults", filteredResults);
    },
    setHasScrolled: (state, scrollStatus) => {
      state.hasScrolled = scrollStatus;
    },
    setNavDrawerIsActive: (state, navDrawerStatus) => {
      state.navDrawer.isActive = navDrawerStatus;
    }
  },

  actions: {
    updateFilteredResults: (context, filteredResults) =>
      context.commit("setFilteredResults", filteredResults),
    updateHasScrolled: (context, scrollStatus) =>
      context.commit("setHasScrolled", scrollStatus),
    updateMenuIndexNumber: (context, indexNumber) =>
      context.commit("setMenuIndexNumber", indexNumber),
    updateModalActive: (context, modalStatus) =>
      context.commit("setModalActive", modalStatus),
    updateModalClosedOnce: (context, modalStatus) =>
      context.commit("setModalClosedOnce", modalStatus),
    updateStepperActiveStep: (context, indexNumber) =>
      context.commit("setStepperActiveStep", indexNumber),
    updateNavDrawerIsActive: (context, navDrawerStatus) =>
      context.commit("setNavDrawerIsActive", navDrawerStatus),
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
    async updatePlantLibraryData(context) {
      let plantsData = await Vue.axios.get(`${dataBaseUrl}/plantsdata`);
      context.commit("setPlantLibraryData", plantsData.data);
    },
    async updateViewEaseOfCareMenu(context) {
      let easeOfCareData = await Vue.axios.get(
        `${dataBaseUrl}/easeofcaremenudata`
      );
      context.commit("setEaseOfCareMenuSelectionOptions", easeOfCareData.data);
    },
    async updateViewLightLevelMenu(context) {
      let lightLevelData = await Vue.axios.get(
        `${dataBaseUrl}/lightlevelmenudata`
      );
      context.commit("setLightLevelMenuSelectionOptions", lightLevelData.data);
    },
    async updateViewPetSafeMenu(context) {
      let petSafeData = await Vue.axios.get(`${dataBaseUrl}/petsafemenudata`);
      context.commit("setPetSafeMenuSelectionOptions", petSafeData.data);
    },
    //Titles are linked to index numbers to keep two-way data binding (item-groups and chip-groups) in sync.
    //TODO Reduce code repetition
    async handleUserSelection(context, mutationName) {
      let menuTitles = [];
      switch (mutationName) {
        case "setPlantSizeMenuUserSelectionTitles":
          switch (context.state.userSelections.indexes.plantSizeMenu) {
            case 0:
              menuTitles.push(context.state.menuData.plantSize[0].cardtitle);
              break;
            case 1:
              menuTitles.push(context.state.menuData.plantSize[1].cardtitle);
              break;
            case 2:
              menuTitles.push(context.state.menuData.plantSize[2].cardtitle);
              break;
            default:
              return "Error in setPlantSizeMenuUserSelectionTitles";
          }
          context.commit(mutationName, menuTitles);
          break;
        case "setLightLevelMenuUserSelectionTitles":
          context.state.userSelections.indexes.lightLevelMenu.sort();
          context.state.userSelections.indexes.lightLevelMenu.forEach(
            indexNumber => {
              switch (indexNumber) {
                case 0:
                  menuTitles.push(
                    context.state.menuData.lightLevel[0].cardtitle
                  );
                  break;
                case 1:
                  menuTitles.push(
                    context.state.menuData.lightLevel[1].cardtitle
                  );
                  break;
                case 2:
                  menuTitles.push(
                    context.state.menuData.lightLevel[2].cardtitle
                  );
                  break;
                case 3:
                  menuTitles.push(
                    context.state.menuData.lightLevel[3].cardtitle
                  );
                  break;
                case 4:
                  menuTitles.push(
                    context.state.menuData.lightLevel[4].cardtitle
                  );
                  break;
                default:
                  return "Error in setPlantSizeMenuUserSelectionTitles";
              }
            }
          );
          context.commit(mutationName, menuTitles);
          break;
        case "setEaseOfCareMenuUserSelectionTitles":
          context.state.userSelections.indexes.easeOfCareMenu.sort();
          context.state.userSelections.indexes.easeOfCareMenu.forEach(
            indexNumber => {
              switch (indexNumber) {
                case 0:
                  menuTitles.push(
                    context.state.menuData.easeOfCare[0].cardtitle
                  );
                  break;
                case 1:
                  menuTitles.push(
                    context.state.menuData.easeOfCare[1].cardtitle
                  );
                  break;
                case 2:
                  menuTitles.push(
                    context.state.menuData.easeOfCare[2].cardtitle
                  );
                  break;
                default:
                  return "Error in setPlantSizeMenuUserSelectionTitles";
              }
            }
          );
          context.commit(mutationName, menuTitles);
          break;
        case "setPetSafeMenuUserSelectionTitles":
          switch (context.state.userSelections.indexes.petSafeMenu) {
            case 0:
              menuTitles.push(context.state.menuData.petSafe[0].cardtitle);
              break;
            case 1:
              menuTitles.push(context.state.menuData.petSafe[1].cardtitle);
              break;
            default:
              return "Error in setPlantSizeMenuUserSelectionTitles";
          }
          context.commit(mutationName, menuTitles);
          break;
      }
    }
  },
  plugins: [createPersistedState()]
});
