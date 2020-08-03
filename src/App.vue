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
      "%s - Houseplants made easy",
    htmlAttrs: {
      lang: "en"
    }
  },
  name: "App",
  created() {
    this.$store.dispatch('updatePlantSizeMenu');
    this.$store.dispatch('updateLightLevelMenu');
    this.$store.dispatch('updateEaseOfCareMenu');
    this.$store.dispatch('updatePetSafeMenu');
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
