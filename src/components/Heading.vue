<template>
  <h1>{{ headingText }}</h1>
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
