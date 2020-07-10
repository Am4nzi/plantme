<template>
  <div>
    <v-app>
      <!--    <Layout.vue />-->
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  //Set Meta information via vue-meta plugin https://vue-meta.nuxtjs.org/
  metaInfo: {
    title: "PlantMe",
    titleTemplate:
      "%s - PlantMe helps you choose your next houseplant. Filter by size, light requirements, ease of care and pet safety",
    htmlAttrs: {
      lang: "en"
    },
  },
  name: "App",
  // Set Vuex menu state values from plantsdb
  created() {
    this.$store.commit("setMenuIndex", 1);
    fetch("http://localhost:3000/sizemenudata")
      .then(response => response.json())
      .then(data => {
        this.$store.dispatch("updatePlantSizeMenu", data);
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
