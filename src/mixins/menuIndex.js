export default {
  computed: {
    getMenuIndex() {
      console.log(this.$store.getters.getMenuIndexNumber)
      return this.$store.getters.getMenuIndexNumber;
    }
  }
};
