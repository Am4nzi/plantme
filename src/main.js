import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

const axios = require("axios");
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const localServerUrl = 'http://localhost:3000';

const herokuServerUrl = process.env.VUE_APP_DATABASE_URL;

if (typeof localServerUrl !== 'undefined') {
  Vue.axios.defaults.baseURL = localServerUrl;
}

if (window.location.href === "https://plantme.herokuapp.com/") {
  Vue.axios.defaults.baseURL = herokuServerUrl;
}

Vue.axios
  .get(`/sizemenudata`)
  .then(response => {
    this.$store.dispatch("updatePlantSizeMenu", response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

Vue.axios
  .get(`/lightlevelmenudata`)
  .then(response => {
    this.$store.dispatch("updateLightLevelMenu", response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

Vue.axios
  .get(`/easeofcaremenudata`)
  .then(response => {
    this.$store.dispatch("updateEaseOfCareMenu", response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

Vue.axios
  .get(`/petsafemenudata`)
  .then(response => {
    this.$store.dispatch("updatePetSafeMenu", response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
