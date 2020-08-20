export default {
  methods: {
    async selectItem(cardSelection, menuName, commit) {
      this.activeItem = cardSelection;
      this.mandatory = true;
      this.$store.commit(commit);
    },
    async selectItemChip(commit) {
      this.mandatory = true;
      this.$store.commit(commit);
    }
  }
};
