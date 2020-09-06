<template>
  <div>
    <NavigationDrawer />
    <Toolbar />
    <Results />
    <Footer />
  </div>
</template>

<script>
import NavigationDrawer from "../components/NavigationDrawer";
import Results from "../components/Results";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
export default {
  name: "Layout",
  components: {
    Toolbar,
    Results,
    NavigationDrawer,
    Footer
  }
};
</script>
