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
      indexes: null,
      indexArray: []
    },
    plantSize: {
      titles: [],
      indexes: []
    }
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
        index: null,
      },
      plantSize: {
        titles: [],
        indexes: []
      }
    };
  },
  // setPlantSizeMenuSelection(state, value) {
  //   //THIS ISN'T WORKING
  //   //check state when on card and filter, and they'll be different
  //   console.log('store.state.selected.plantSizeMenu: ', state.selected.plantSizeMenu);
  //   console.log('value: ', value);
  //   if (state.menuSelection.plantSize.titles.includes(value)) {
  //     state.menuSelection.plantSize.titles.splice(
  //       state.menuSelection.plantSize.titles.indexOf(value),
  //       1
  //     );
  //     state.menuSelection.plantSize.titles.splice(
  //       state.menuSelection.plantSize.titles.indexOf(value),
  //       1
  //     );
  //   } else state.menuSelection.plantSize.titles.unshift(value);
  // },
  // setLightLevelMenuSelection(state, value) {
  //   if (state.menuSelection.lightLevel.titles.includes(value)) {
  //     state.menuSelection.lightLevel.titles.splice(
  //       state.menuSelection.lightLevel.titles.indexOf(value),
  //       1
  //     );
  //   } else state.menuSelection.lightLevel.titles.unshift(value);
  // },
  // setEaseOfCareMenuSelection(state, value) {
  //   if (state.menuSelection.easeOfCare.titles.includes(value)) {
  //     state.menuSelection.easeOfCare.titles.splice(
  //       state.menuSelection.easeOfCare.titles.indexOf(value),
  //       1
  //     );
  //   } else state.menuSelection.easeOfCare.titles.unshift(value);
  // },
  // setPetSafeMenuSelection(state, value) {
  //   if (state.menuSelection.petSafe.titles.includes(value)) {
  //     state.menuSelection.petSafe.titles.splice(
  //       state.menuSelection.petSafe.titles.indexOf(value),
  //       1
  //     );
  //   } else state.menuSelection.petSafe.titles.unshift(value);
  // }
};

export default {
  state,
  mutations
};
