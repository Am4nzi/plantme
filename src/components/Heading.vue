<template>
  <h1>{{ headingText }}</h1>
</template>

<script>
export default {
  name: "Heading",
  computed: {
    headingText() {
      console.log('this.$store.state.menus.headingText: ', this.$store.state.menus.headingText);
      return this.$store.state.menus.headingText;
    }
  }
};
</script>
