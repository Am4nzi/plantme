<template>
  <v-card outlined>
    <Stepper />
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
  }
};
</script>
