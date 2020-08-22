let filtered = {};
export default {
  methods: {
    async filterResults() {
      for (const property in this.getPlantsData) {
        if (
          this.getPlantsData[property].properties.some(
            sizeProperty =>
              this.getMenuSelection.plantSize.titles.indexOf(sizeProperty) >= 0
          ) &&
          this.getPlantsData[property].properties.some(
            lightLevelProperty =>
              this.getMenuSelection.lightLevel.titles.indexOf(
                lightLevelProperty
              ) >= 0
          ) &&
          this.getPlantsData[property].properties.some(
            easeOfCareProperty =>
              this.getMenuSelection.easeOfCare.titles.indexOf(
                easeOfCareProperty
              ) >= 0
          ) &&
          this.getPlantsData[property].properties.some(
            petSafeProperty =>
              this.getMenuSelection.petSafe.titles.indexOf(petSafeProperty) >= 0
          )
        ) {
          filtered[property] = this.getPlantsData[property];
        }
      }
      await this.$store.dispatch("updateFilteredResults", filtered);
    }
  }
};
