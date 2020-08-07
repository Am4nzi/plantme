const mapGetters = require("vuex")["mapGetters"];
export default {
  computed: {
    ...mapGetters(["getMenuData"]),
    getGuideTitles() {
      switch (this.getMenuIndex) {
        case 1:
          return this.getMenuData.guideTitles[0].guidetitle;
        case 2:
          return this.getMenuData.guideTitles[1].guidetitle;
        default:
          return "Error in getGuideTitles mixin function";
      }
    }
  }
};
