const state = {
  indexNumber: 1,
  menuTitle: "",
  menuTitles: []
};

const mutations = {
  setMenuIndex(state, value) {
    state.indexNumber = value;
  },
  setMenuTitle(state, value) {
    state.menuTitle = value;
  }
};

export default {
  state,
  mutations
};
