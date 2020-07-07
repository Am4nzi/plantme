<template>
  <h1 class="teal--text">{{ headingText }}</h1>
</template>

<script>
export default {
  name: "Heading",
  computed: {
    headingText() {
      return this.$store.state.menus.headingText;
    }
  }
};
</script>

<style scoped>
  h1 {
    font-family: roc-grotesk, sans-serif;
    font-size: 3rem;
  }
</style>
