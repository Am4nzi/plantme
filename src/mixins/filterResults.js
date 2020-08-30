export default {
  methods: {
    async filterResults() {
      let plantsData = this.getPlantsData;

      if (this.getUserSelections.titles.plantSizeMenu.includes("Small")) {
        for (const property in plantsData) {
          if (
            plantsData[property].properties.includes("Medium") ||
            plantsData[property].properties.includes("Large")
          ) {
            delete plantsData[property];
          }
        }
      }

      if (this.getUserSelections.titles.plantSizeMenu.includes("Medium")) {
        for (const property in plantsData) {
          if (plantsData[property].properties.includes("Large")) {
            delete plantsData[property];
          }
        }
      }

      console.log("plantsDataCopy: ", plantsData);

      let filtered = {};
      for (const property in this.getPlantsData) {
        if (
          plantsData[property].properties.some(
            plantSizeProperty =>
              this.getUserSelections.titles.plantSizeMenu.indexOf(
                plantSizeProperty
              ) >= 0
          ) &&
          plantsData[property].properties.some(
            lightLevelProperty =>
              this.getUserSelections.titles.lightLevelMenu.indexOf(
                lightLevelProperty
              ) >= 0
          ) &&
          plantsData[property].properties.some(
            easeOfCareProperty =>
              this.getUserSelections.titles.easeOfCareMenu.indexOf(
                easeOfCareProperty
              ) >= 0
          ) &&
          plantsData[property].properties.some(
            petSafeProperty =>
              this.getUserSelections.titles.petSafeMenu.indexOf(
                petSafeProperty
              ) >= 0
          )
        ) {
          filtered[property] = plantsData[property];
        }
      }
      console.log("filtered: ", filtered);
      await this.$store.dispatch("updateFilteredResults", filtered);
    }
  }
};
