<template>
  <div :class="{ addMargin: hasScrolled }">
    <h1 class="teal--text">{{ headingText }}</h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  computed: {
    headingText() {
      return this.$store.getters.getMenuTitle;
    },
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
