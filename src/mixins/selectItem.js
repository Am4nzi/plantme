export default {
  methods: {
    selectItem(cardSelection, commit) {
      this.activeItem = cardSelection;
      this.mandatory = true;
      this.$store.commit(commit, [cardSelection.cardtitle, this.selected]);
    },
  }
};
