<template>
  <div>
    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon
        @click.stop="toggleNavDrawer"
        color="grey"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "Toolbar",
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapGetters(["getNavDrawerStatus"])
  },
  methods: {
    async toggleNavDrawer() {
      switch (this.getNavDrawerStatus) {
        case true:
          await this.$store.dispatch("updateNavDrawerIsActive", false);
          break;
        case false:
          await this.$store.dispatch("updateNavDrawerIsActive", true);
          break;
        default:
          await this.$store.dispatch("updateNavDrawerIsActive", true);
      }
    }
  }
};
</script>
