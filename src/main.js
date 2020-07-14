import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

const axios = require("axios");
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.axios
  .get(`/api/sizemenudata`)
  .then(response => {
    this.store.dispatch("updatePlantSizeMenu", response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

Vue.axios
  .get(`/api/lightlevelmenudata`)
  .then(response => {
    this.store.dispatch("updateLightLevelMenu", response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

Vue.axios
  .get(`/api/easeofcaremenudata`)
  .then(response => {
    this.store.dispatch("updateEaseOfCareMenu", response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

Vue.axios
  .get(`/api/petsafemenudata`)
  .then(response => {
    this.store.dispatch("updatePetSafeMenu", response.data);
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
