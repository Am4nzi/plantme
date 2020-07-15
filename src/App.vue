<template>
  <div>
    <v-app>
      <!--    <Layout.vue />-->
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Vue from "vue";
const axios = require("axios");
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

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
  data: () => ({
    sizeMenuData: {}
  }),
  // Set Vuex menu state values from plantsdb
  created() {
    this.$store.commit("setMenuIndex", 1);

    let dataBaseUrl = "";

    if (window.location.href.includes("localhost")) {
      dataBaseUrl = "http://localhost:3000/api";
    } else dataBaseUrl = "/api";

    Vue.axios
      .get(`${dataBaseUrl}/sizemenudata`)
      .then(response => {
        this.$store.dispatch("updatePlantSizeMenu", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    Vue.axios
      .get(`${dataBaseUrl}/lightlevelmenudata`)
      .then(response => {
        this.$store.dispatch("updateLightLevelMenu", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    Vue.axios
      .get(`${dataBaseUrl}/easeofcaremenudata`)
      .then(response => {
        this.$store.dispatch("updateEaseOfCareMenu", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    Vue.axios
      .get(`${dataBaseUrl}/petsafemenudata`)
      .then(response => {
        this.$store.dispatch("updatePetSafeMenu", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
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

@media (max-width: 600px) {
  h1 {
    font-size: 2.4rem;
    line-height: 1.3;
  }
  h2 {
    line-height: 1.1;
  }
  p {
    text-align: left !important;
  }
}
</style>
