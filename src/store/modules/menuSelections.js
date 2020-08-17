const state = {
  menuSelection: {
    easeOfCare: {
      titles: [],
      indexes: []
    },
    lightLevel: {
      titles: [],
      indexes: []
    },
    petSafe: {
      titles: [],
      indexes: []
    },
    plantSize: {
      titles: [],
      indexes: []
    },
    allSelectionsList: []
  }
};

// TODO: reduce repetition of below code
const mutations = {
  setClearMenuSelections(state) {
    state.menuSelection = {
      easeOfCare: {
        titles: [],
        indexes: []
      },
      lightLevel: {
        titles: [],
        indexes: []
      },
      petSafe: {
        titles: [],
        indexes: []
      },
      plantSize: {
        titles: [],
        indexes: []
      },
      allSelectionsList: []
    };
  },
  setPlantSizeMenuSelection(state, value) {
    state.menuSelection.plantSize.indexes = value[1];
    if (state.menuSelection.plantSize.titles.includes(value[0])) {
      state.menuSelection.plantSize.titles.splice(
        state.menuSelection.plantSize.titles.indexOf(value[0]),
        1
      );
      state.menuSelection.plantSize.titles.splice(
        state.menuSelection.plantSize.titles.indexOf(value[0]),
        1
      );
      state.menuSelection.allSelectionsList.splice(
        state.menuSelection.allSelectionsList.indexOf(value[0]),
        1
      );
    } else state.menuSelection.plantSize.titles.unshift(value[0]);
    state.menuSelection.allSelectionsList.unshift(value[0]);
  },
  setLightLevelMenuSelection(state, value) {
    state.menuSelection.lightLevel.indexes = value[1];
    if (state.menuSelection.lightLevel.titles.includes(value[0])) {
      state.menuSelection.lightLevel.titles.splice(
        state.menuSelection.lightLevel.titles.indexOf(value[0]),
        1
      );
      state.menuSelection.allSelectionsList.splice(
        state.menuSelection.allSelectionsList.indexOf(value[0]),
        1
      );
    } else state.menuSelection.lightLevel.titles.unshift(value[0]);
    state.menuSelection.allSelectionsList.unshift(value[0]);
  },
  setEaseOfCareMenuSelection(state, value) {
    state.menuSelection.easeOfCare.indexes = value[1];
    if (state.menuSelection.easeOfCare.titles.includes(value[0])) {
      state.menuSelection.easeOfCare.titles.splice(
        state.menuSelection.easeOfCare.titles.indexOf(value[0]),
        1
      );
      state.menuSelection.allSelectionsList.splice(
        state.menuSelection.allSelectionsList.indexOf(value[0]),
        1
      );
    } else state.menuSelection.easeOfCare.titles.unshift(value[0]);
    state.menuSelection.allSelectionsList.unshift(value[0]);
  },
  setPetSafeMenuSelection(state, value) {
    state.menuSelection.petSafe.indexes = value[1];
    if (state.menuSelection.petSafe.titles.includes(value[0])) {
      state.menuSelection.petSafe.titles.splice(
        state.menuSelection.petSafe.titles.indexOf(value[0]),
        1
      );
      state.menuSelection.allSelectionsList.splice(
        state.menuSelection.allSelectionsList.indexOf(value[0]),
        1
      );
    } else state.menuSelection.petSafe.titles.unshift(value[0]);
    state.menuSelection.allSelectionsList.unshift(value[0]);
  }
};

export default {
  state,
  mutations
};
