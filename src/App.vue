<template>
  <v-app>
    <!--    <Layout.vue />-->
    <router-view />
  </v-app>
</template>

<script>
import Vue from "vue";
const axios = require("axios");
import VueAxios from "vue-axios";
import guideText from "./mixins/getGuideTitles";
import menuIndex from "./mixins/menuIndex";
import selectItem from "./mixins/selectItem";
import filterResults from "./mixins/filterResults";
const mapGetters = require("vuex")["mapGetters"];

Vue.mixin(guideText);
Vue.mixin(menuIndex);
Vue.mixin(selectItem);
Vue.mixin(filterResults);

Vue.use(VueAxios, axios);

export default {
  name: "App",
  computed: {
    ...mapGetters(["getMenuTitles"])
  },
  async mounted() {
    await this.$store.dispatch("updateModalActive", true);
    await this.$store.dispatch("updateInitialViewData");
    await this.$store.dispatch(
      "updateInitialMenuTitle",
      this.getMenuTitles[0].menutitle
    );
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
h6 {
  font-family: sofia-pro, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
}
ul,
p,
div {
  font-family: sofia-pro, sans-serif;
  font-size: 1.2rem;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2.25rem;
    letter-spacing: -0.4px;
    line-height: 1.3;
  }
  h2 {
    line-height: 1.1;
  }
  p {
    text-align: left !important;
  }
  .card-title {
    font-size: 1.12rem !important;
  }
}
</style>
