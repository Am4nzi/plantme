<template>
  <v-card class="elevation-12">
    <Stepper />
    <v-card-text>
      <router-view />
    </v-card-text>
    <ExpandTransition :text="menu.expandInfo.plantSize" />
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
  },
  data: () => ({
    menu: {
      expandInfo: {
        plantSize: "Dummy Text"
      }
    }
  }),
};
</script>
