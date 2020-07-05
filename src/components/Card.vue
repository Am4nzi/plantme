<template>
  <v-card class="elevation-12">
    <Stepper />
    <v-card-text>
      <v-item-group mandatory>
        <router-view :headingText="menu.headingText"/>
      </v-item-group>
    </v-card-text>
    <ExpandTransition :text="menu.expandInfo.plantSize" />
  </v-card>
</template>

<script>
import ExpandTransition from "../components/ExpandTransition";
import Stepper from "../components/Stepper";
export default {
  name: "Card",
  components: {
    ExpandTransition,
    Stepper
  },
  data: () => ({
    menu: {
      expandInfo: {
        plantSize: "Dummy Text"
      },
      headingText: 'Select Size'
    },
  }),
  methods: {
  }
};
</script>
