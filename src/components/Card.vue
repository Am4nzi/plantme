<template>
  <v-card outlined>
    <Stepper :class="{ fixed: hasScrolled }" />
    <router-view />
    <ExpansionPanel />
  </v-card>
</template>

<script>
import ExpansionPanel from "./ExpansionPanel";
import Stepper from "../components/Stepper";
export default {
  name: "Card",
  components: {
    ExpansionPanel,
    Stepper
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        if (window.pageYOffset > 25) {
          this.$store.dispatch("updateHasScrolled", true);
        }

        if (window.pageYOffset < 25) {
          this.$store.dispatch("updateHasScrolled", false);
        }
      };
    }
  },
  computed: {
    hasScrolled() {
      return this.$store.state.hasScrolled;
    }
  }
};
</script>

<style>
@media (max-width: 600px) {
  .fixed {
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
    left: 0;
  }
}
</style>
