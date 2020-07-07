<template>
  <v-app>
    <!--    <Layout.vue />-->
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  // Set Vuex menu state values from plantsdb
  created() {
    fetch("http://localhost:3000/sizemenudata")
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
  }
};
</script>
<style>
/*Import roc-grotesk from adobe fonts*/
@import url("https://use.typekit.net/ega7mjw.css");

  .v-application {
    background-color: red;
  }
</style>
