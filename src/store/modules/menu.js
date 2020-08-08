const state = {
  indexNumber: null,
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
