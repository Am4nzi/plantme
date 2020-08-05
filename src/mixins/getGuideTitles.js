export default {
  computed: {
    getGuideTitles() {
      switch (this.getMenuIndex) {
        case 1:
          return this.$store.getters.getMenuData.guideTitles[0].guidetitle;
        case 2:
          return this.$store.getters.getMenuData.guideTitles[1].guidetitle;
        default:
          console.log('this.getMenuIndex: ', this.getMenuIndex);
          return "Error in getGuideTitles mixin function";
      }
    }
  }
};
