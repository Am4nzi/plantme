<template>
  <v-card outlined>
    <Stepper />
      <router-view />
    <ExpandTransition/>
  </v-card>
</template>

<script>
import ExpandTransition from "../components/ExpandTransition";
import Stepper from "../components/Stepper";
export default {
  name: "Card",
  props: ["menuIndex"],
  components: {
    ExpandTransition,
    Stepper
  }
};
</script>
