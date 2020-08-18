export default {
  methods: {
   async selectItem(cardSelection, commit) {
      await this.$store.dispatch("updateHasSelected", true);
      this.activeItem = cardSelection;
      this.mandatory = true;
      this.$store.commit(commit, [cardSelection.cardtitle, this.selected]);
    },
  }
};
