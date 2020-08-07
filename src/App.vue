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
import guideText from "./mixins/getGuideTitles";
import menuIndex from "./mixins/menuIndex";
import selectItem from "./mixins/selectItem";
const mapGetters = require("vuex")["mapGetters"];

Vue.mixin(guideText);
Vue.mixin(menuIndex);
Vue.mixin(selectItem);

Vue.use(VueAxios, axios);

export default {
  name: "App",
  computed: {
    ...mapGetters(["getMenuTitles"])
  },
  async mounted() {
    await this.$store.dispatch("updateMenuTitles");
    await this.$store.commit("setMenuIndex", 1);
    await this.$store.dispatch(
      "updateInitialMenuTitle",
      this.getMenuTitles[0].menutitle
    );
    await this.$store.dispatch("updateGuideTitles");
    await this.$store.dispatch("updateStepperText");
    await this.$store.dispatch("updateMenuPlantSize");
    await this.$store.dispatch("updateMenuLightLevel");
    await this.$store.dispatch("updateMenuEaseOfCare");
    await this.$store.dispatch("updateMenuPetSafe");
  },
  beforeMount() {
    //Handle refresh safely
    if (this.$router.currentRoute.name !== "PlantSizeMenu") {
      this.$router.push({ name: "PlantSizeMenu" });
    }
  }
};
</script>
<style>
/*Import roc-grotesk and sofia-pro from adobe fonts*/
@import url("https://use.typekit.net/qso6ymh.css");

h1 {
  font-family: operetta-12, serif;
  font-weight: 700;
  font-size: 3.6rem;
}
h2 {
  font-family: operetta-12, serif;
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
