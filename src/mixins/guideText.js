export default {
  computed: {
    getGuideText() {
      switch (this.getMenuIndex) {
        case 1:
          return this.$store.getters.getExpansionPanelText.plantSize;
        case 2:
          return this.$store.getters.getExpansionPanelText.lightLevel;
        default:
          return "Error in getExpansionPanelText() /ExpansionPanel.vue";
      }
    }
  }
};