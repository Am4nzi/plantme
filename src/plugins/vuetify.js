import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#fcc7b8",
        secondary: "#c4f5e1",
        highlight: "#ff5728",
      }
    }
  }
});
