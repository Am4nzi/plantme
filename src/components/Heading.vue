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
      return this.$store.state.menu.menuTitle;
    },
    hasScrolled() {
      return this.$store.state.hasScrolled;
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
