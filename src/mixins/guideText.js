export default {
  computed: {
    getGuideText() {
      switch (this.getMenuIndex) {
        case 1:
          return this.$store.getters.getExpansionPanelText.plantSize;
        case 2:
          return this.$store.getters.getExpansionPanelText.lightLevel;
        case 3:
          return this.$store.getters.getExpansionPanelText.easeOfCare;
        case 4:
          return this.$store.getters.getExpansionPanelText.petSafe;
        default:
          return "Error in getExpansionPanelText() /ExpansionPanel.vue";
      }
    }
  }
};