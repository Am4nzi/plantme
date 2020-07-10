const state = {
  menuSelection: {
    plantSize: [],
    lightLevel: [],
    easeOfCare: [],
    petSafe: []
  }
};

const mutations = {
  setPlantSizeMenuSelection(state, value) {
    state.menuSelection.plantSize = value;
  },
  setLightLevelMenuSelection(state, value) {
    state.menuSelection.lightLevel = value;
  },
  setEaseOfCareMenuSelection(state, value) {
    state.menuSelection.easeOfCare = value;
  },
  setPetSafeMenuSelection(state, value) {
    state.menuSelection.petSafe = value;
  }
};

export default {
  state,
  mutations
};
