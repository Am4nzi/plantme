let filtered = {};
export default {
  methods: {
    async filterResults() {
      for (const property in this.getPlantsData) {
        if (
          this.getPlantsData[property].properties.some(
            plantSizeProperty =>
              this.getUserSelections.titles.plantSizeMenu.indexOf(
                plantSizeProperty
              ) >= 0
          ) &&
          this.getPlantsData[property].properties.some(
            lightLevelProperty =>
              this.getUserSelections.titles.lightLevelMenu.indexOf(
                lightLevelProperty
              ) >= 0
          ) &&
          this.getPlantsData[property].properties.some(
            easeOfCareProperty =>
              this.getUserSelections.titles.easeOfCareMenu.indexOf(
                easeOfCareProperty
              ) >= 0
          ) &&
          this.getPlantsData[property].properties.some(
            petSafeProperty =>
              this.getUserSelections.titles.petSafeMenu.indexOf(
                petSafeProperty
              ) >= 0
          )
        ) {
          filtered[property] = this.getPlantsData[property];
        }
      }
      await this.$store.dispatch("updateFilteredResults", filtered);
    }
  }
};
