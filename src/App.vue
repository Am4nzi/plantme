<template>
  <v-app>
    <!--    <Layout />-->
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    menuHeadingText: "Select Size",
    stepperText: {
      step01: "Plant Size",
      step02: "Light Level",
      step03: "Ease of Care",
      step04: "Pet Safe?"
    },
  }),
  created() {
    fetch("http://localhost:3000/sizemenudata")
      .then(response => response.json())
      .then(data => {
        this.$store.dispatch("updatePlantSizeMenu", data);
        this.$store.dispatch("updateCurrentMenu", data);
      })
      .catch(error => console.error(error));
    fetch("http://localhost:3000/lightlevelmenudata")
      .then(response => response.json())
      .then(data => {
        this.$store.dispatch("updateLightLevelMenu", data);
      })
      .catch(error => console.error(error));
    fetch("http://localhost:3000/easeofcaremenudata")
      .then(response => response.json())
      .then(data => {
        this.$store.dispatch("updateEaseOfCareMenu", data);
      })
      .catch(error => console.error(error));
    fetch("http://localhost:3000/petsafemenudata")
      .then(response => response.json())
      .then(data => {
        this.$store.dispatch("updatePetSafeMenu", data);
      })
      .catch(error => console.error(error));
    this.$store.dispatch("updateMenuHeadingText", this.menuHeadingText);
    this.$store.dispatch("updateStepperText", this.stepperText);
  }
};
</script>
