const state = {
  menuSelection: {
    easeOfCare: [],
    lightLevel: [],
    petSafe: [],
    plantSize: []
  }
};

const mutations = {
  setEaseOfCareMenuSelection(state, value) {
    state.menuSelection.easeOfCare = value;
  },
  setLightLevelMenuSelection(state, value) {
    state.menuSelection.lightLevel = value;
  },
  setPetSafeMenuSelection(state, value) {
    state.menuSelection.petSafe = value;
  },
  setPlantSizeMenuSelection(state, value) {
    state.menuSelection.plantSize = value;
  }
};

export default {
  state,
  mutations
};
