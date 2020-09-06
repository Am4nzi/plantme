<template>
  <div>
    <h1 class="grey--text text--darken-3">
      {{ menuTitle }}
    </h1>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "Heading",
  computed: {
    ...mapGetters(["getMenuTitles"]),
    ...mapGetters(["getMenuIndexNumber"]),
    ...mapGetters(["initialViewDataLoaded"]),
    hasScrolled() {
      return this.$store.getters.getHasScrolled;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    menuTitle() {
      switch (this.getMenuIndexNumber) {
        case 0:
          return this.getMenuTitles[0].menutitle;
        case 1:
          return this.getMenuTitles[1].menutitle;
        case 2:
          return this.getMenuTitles[2].menutitle;
        case 3:
          return this.getMenuTitles[3].menutitle;
        default:
          return "Error in menuTitle";
      }
    }
  },
  mounted() {
    if (this.getMenuIndexNumber > 1) {
      this.checkRoute = false;
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
