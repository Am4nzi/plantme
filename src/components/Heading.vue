<template>
  <h1 class="teal--text">{{ headingText }}</h1>
</template>

<script>
export default {
  name: "Heading",
  computed: {
    headingText() {
      return this.$store.state.menu.menuTitle;
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
