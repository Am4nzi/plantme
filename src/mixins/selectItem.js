export default {
  methods: {
   async selectItem(cardSelection, menuName, commit) {
      await this.$store.dispatch("updateHasSelected", menuName);
      this.activeItem = cardSelection;
      this.mandatory = true;
      this.$store.commit(commit, [cardSelection.cardtitle, this.selected]);
    },
  }
};
