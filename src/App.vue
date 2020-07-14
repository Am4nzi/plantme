<template>
  <div>
    <v-app>
      <!--    <Layout.vue />-->
      <router-view />
    </v-app>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  //Set Meta information via vue-meta plugin https://vue-meta.nuxtjs.org/
  metaInfo: {
    title: "PlantMe",
    titleTemplate:
      "%s - PlantMe helps you choose your next houseplant. Filter by size, light requirements, ease of care and pet safety",
    htmlAttrs: {
      lang: "en"
    }
  },
  name: "App",
  // Set Vuex menu state values from plantsdb
  created() {
    const databaseURL =
      process.env.VUE_APP_DATABASE_URL || "http://localhost:3000";
    // const lightLevelDataUrl = process.env.VUE_APP_DATABASE_URL || 'http://localhost:3000';
    // const easeOfCareDataUrl = process.env.VUE_APP_DATABASE_URL || 'http://localhost:3000';
    // const petSafeSataUrl = process.env.VUE_APP_DATABASE_URL || 'http://localhost:3000';

    this.$store.commit("setMenuIndex", 1);

    axios
      .get(`${databaseURL}/sizemenudata`)
      .then(response => {
        console.log("RESPONSE PLANT SIZE: ", response.data);
        this.$store.dispatch("updatePlantSizeMenu", response.data);
      })
      .catch(function(error) {
        console.error(error);
      });

    axios
      .get(`${databaseURL}/lightlevelmenudata`)
      .then(response => {
        this.$store.dispatch("updateLightLevelMenu", response.data);
      })
      .catch(function(error) {
        console.error(error);
      });

    axios
      .get(`${databaseURL}/easeofcaremenudata`)
      .then(response => {
        this.$store.dispatch("updateEaseOfCareMenu", response.data);
      })
      .catch(function(error) {
        console.error(error);
      });

    axios
      .get(`${databaseURL}/petsafemenudata`)
      .then(response => {
        this.$store.dispatch("updatePetSafeMenu", response.data);
      })
      .catch(function(error) {
        console.error(error);
      });

    //   fetch(`${plantSizeDataUrl}/sizemenudata`)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.$store.dispatch("updatePlantSizeMenu", data);
    //     })
    //     .catch(error => console.error(error));
    //   fetch(`${lightLevelDataUrl}/lightlevelmenudata`)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.$store.dispatch("updateLightLevelMenu", data);
    //     })
    //     .catch(error => console.error(error));
    //   fetch(`${easeOfCareDataUrl}/easeofcaremenudata`)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.$store.dispatch("updateEaseOfCareMenu", data);
    //     })
    //     .catch(error => console.error(error));
    //   fetch(`${petSafeSataUrl}/petsafemenudata`)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.$store.dispatch("updatePetSafeMenu", data);
    //     })
    //     .catch(error => console.error(error));
  }
};
</script>
<style>
/*Import roc-grotesk and sofia-pro from adobe fonts*/
@import url("https://use.typekit.net/ega7mjw.css");

h1 {
  font-family: roc-grotesk, sans-serif;
  font-size: 3rem;
}
h2 {
  font-family: roc-grotesk, sans-serif;
  font-size: 2rem;
  font-weight: 600;
}
ul,
p,
div {
  font-family: sofia-pro, sans-serif;
  font-size: 1.2rem;
}
</style>
