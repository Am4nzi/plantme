<template>
  <v-container class="fill-height" fluid>
    <NavigationDrawer />
    <Toolbar />
    <Results />
  </v-container>
</template>

<script>
import NavigationDrawer from "../components/NavigationDrawer";
import Results from "../components/Results";
import Toolbar from "../components/Toolbar";
export default {
  name: "Layout",
  components: {
    Toolbar,
    Results,
    NavigationDrawer
  }
};
</script>
