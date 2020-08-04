<template>
  <div :class="{ addMargin: hasScrolled }">
    <h1 class="teal--text">{{ TitleText }}</h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  computed: {
    TitleText() {
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
