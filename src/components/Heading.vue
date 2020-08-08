<template>
  <div :class="{ addMargin: hasScrolled }">
    <h1 class="grey--text text--darken-3">{{ getMenuTitle }}</h1>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "Heading",
  computed: {
    ...mapGetters(["getMenuTitle"]),
    hasScrolled() {
      return this.$store.getters.getHasScrolled;
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}

.addMargin {
  margin-top: 76px;
}
</style>
