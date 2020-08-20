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
    selected: {
      plantSizeMenu: [],
      lightLevelMenu: [],
      easeOfCareMenu: [],
      petSafeMenu: null
    },
    hasScrolled: null,
    hasSelected: {
      plantSize: false,
      lightLevel: false,
      easeOfCare: false,
      petSafe: false
    },
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
    getSelected: function(state) {
      return state.selected;
    },
    getHasScrolled: function(state) {
      return state.hasScrolled;
    },
    getHasSelected: function(state) {
      return state.hasSelected;
    },
    getStepperHasActivated: function(state) {
      return state.stepperHasActivated;
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
    updateSelectedPlantSize(state, selectedStatus) {
      state.selected.plantSizeMenu = selectedStatus;
    },
    updateSelectedLightLevel(state, selectedStatus) {
      state.selected.lightLevelMenu = selectedStatus;
    },
    updateSelectedEaseOfCare(state, selectedStatus) {
      state.selected.easeOfCareMenu = selectedStatus;
    },
    updateSelectedPetSafe(state, selectedStatus) {
      state.selected.petSafeMenu = selectedStatus;
    },
    setEaseOfCareMenu(state, easeOfCareData) {
      state.menus.easeOfCare = easeOfCareData;
    },
    setHasScrolled(state, scrollStatus) {
      state.hasScrolled = scrollStatus;
    },
    setHasSelectedPlantSize(state, hasSelectedStatus) {
      state.hasSelected.plantSize = hasSelectedStatus;
    },
    setHasSelectedLightLevel(state, hasSelectedStatus) {
      state.hasSelected.lightLevel = hasSelectedStatus;
    },
    setHasSelectedEaseOfCare(state, hasSelectedStatus) {
      state.hasSelected.easeOfCare = hasSelectedStatus;
    },
    setHasSelectedPetSafe(state, hasSelectedStatus) {
      state.hasSelected.petSafe = hasSelectedStatus;
    },
    setStepperHasActivatedPlantSize(state, stepperActiveStatus) {
      state.stepperHasActivated.plantSize = stepperActiveStatus;
    },
    setStepperHasActivatedLightLevel(state, stepperActiveStatus) {
      state.stepperHasActivated.lightLevel = stepperActiveStatus;
    },
    setStepperHasActivatedEaseOfCare(state, stepperActiveStatus) {
      state.stepperHasActivated.easeOfCare = stepperActiveStatus;
    },
    setStepperHasActivatedPetSafe(state, stepperActiveStatus) {
      state.stepperHasActivated.petSafe = stepperActiveStatus;
    },
    setGuideTitles(state, guideTitles) {
      state.menus.guideTitles = guideTitles;
    },
    setLightLevelMenu(state, lightLevelData) {
      state.menus.lightLevel = lightLevelData;
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
    },
    setModalActive(state, modalStatus) {
      state.modal.isActive = modalStatus;
    },
    setModalClosedOnce(state, modalStatus) {
      state.modal.closedOnce = modalStatus;
    },
    setPlantsData(state, plantsData) {
      state.plantsData = plantsData;
    },
    setFilteredSelection(state, filteredSelection) {
      state.filteredSelection = filteredSelection;
    },
    setPlantSizeMenuSelection(state) {
      let newArr = [];
      state.selected.plantSizeMenu.sort();
      state.selected.plantSizeMenu.forEach(element => {
        if (element === 0) {
          newArr.push("Small");
        }
        if (element === 1) {
          newArr.push("Medium");
        }
        if (element === 2) {
          newArr.push("Large");
        }
      });
      state.menuSelections.menuSelection.plantSize.titles = newArr;
    },
    setLightLevelMenuSelection(state) {
      let newArr = [];
      state.selected.lightLevelMenu.sort();
      state.selected.lightLevelMenu.forEach(element => {
        if (element === 0) {
          newArr.push("Minimal Light");
        }
        if (element === 1) {
          newArr.push("Shade");
        }
        if (element === 2) {
          newArr.push("Indirect Light");
        }
        if (element === 3) {
          newArr.push("Bright Indirect");
        }
        if (element === 4) {
          newArr.push("Bright Direct");
        }
      });
      state.menuSelections.menuSelection.lightLevel.titles = newArr;
    },
    setEaseOfCareMenuSelection(state) {
      let newArr = [];
      state.selected.easeOfCareMenu.sort();
      state.selected.easeOfCareMenu.forEach(element => {
        if (element === 0) {
          newArr.push("Easy");
        }
        if (element === 1) {
          newArr.push("Medium");
        }
        if (element === 2) {
          newArr.push("Difficult");
        }
      });
      state.menuSelections.menuSelection.easeOfCare.titles = newArr;
    },
    setPetSafeMenuSelection(state) {
      let newArr = [];
      if (state.selected.petSafeMenu === 0) {
        newArr.push("Safe");
      }
      if (state.selected.petSafeMenu === 1) {
        newArr.push("Not Important");
      }
      state.menuSelections.menuSelection.petSafe.titles = newArr;
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
    updateHasSelected(context, hasSelectedStatus) {
      if (hasSelectedStatus === "plantSize") {
        context.commit("setHasSelectedPlantSize", hasSelectedStatus);
      }
      if (hasSelectedStatus === "lightLevel") {
        context.commit("setHasSelectedLightLevel", hasSelectedStatus);
      }
      if (hasSelectedStatus === "easeOfCare") {
        context.commit("setHasSelectedEaseOfCare", hasSelectedStatus);
      }
      if (hasSelectedStatus === "petSafe") {
        context.commit("setHasSelectedPetSafe", hasSelectedStatus);
      }
    },
    updateInitialMenuTitle(context, initialMenuTitle) {
      context.commit("setMenuTitle", initialMenuTitle);
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
    async updatePlantData(context) {
      let plantsData = await Vue.axios.get(`${dataBaseUrl}/plantsdata`);
      context.commit("setPlantsData", plantsData.data);
    },
    async updateInitialViewData(context) {
      context.commit("setMenuIndex", 1);
      let plantSizeData = await Vue.axios.get(`${dataBaseUrl}/sizemenudata`);
      context.commit("setPlantSizeMenu", plantSizeData.data);
      let menuTitles = await Vue.axios.get(`${dataBaseUrl}/menutitles`);
      context.commit("setMenuTitles", menuTitles.data);
      let guideTitles = await Vue.axios.get(`${dataBaseUrl}/guideTitles`);
      context.commit("setGuideTitles", guideTitles.data);
      let stepperText = await Vue.axios.get(`${dataBaseUrl}/steppertext`);
      context.commit("setStepperText", stepperText.data);
    },
    async updateViewLightLevelMenu(context) {
      let lightLevelData = await Vue.axios.get(
        `${dataBaseUrl}/lightlevelmenudata`
      );
      context.commit("setLightLevelMenu", lightLevelData.data);
    },
    async updateViewEaseOfCareMenu(context) {
      let easeOfCareData = await Vue.axios.get(
        `${dataBaseUrl}/easeofcaremenudata`
      );
      context.commit("setEaseOfCareMenu", easeOfCareData.data);
    },
    async updateViewPetSafeMenu(context) {
      let petSafeData = await Vue.axios.get(`${dataBaseUrl}/petsafemenudata`);
      context.commit("setPetSafeMenu", petSafeData.data);
    }
  },
  modules: {
    menu,
    menuSelections
  },
  plugins: [createPersistedState()]
});
