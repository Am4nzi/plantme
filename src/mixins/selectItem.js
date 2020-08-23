export default {
  methods: {
    async handleMenuUserSelections(cardSelection, mutationName) {
      this.activeItem = cardSelection;
      this.mandatory = true;
      await this.$store.dispatch("handleUserSelection", mutationName);
    },
    async handleNavDrawerUserSelections(mutationName) {
      this.mandatory = true;
      await this.$store.dispatch("handleUserSelection", mutationName);
    }
  }
};
