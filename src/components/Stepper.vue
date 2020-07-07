<template>
  <v-stepper
    class="blue-grey elevation-0 rounded-tl-sm rounded-t4-sm rounded-bl-0 rounded-br-0 lighten-5"
  >
    <v-stepper-header>
      <v-stepper-step editable step="1" @click="navigateToPlantSizeMenu">
        {{ stepperText.step01 }}
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step editable step="2" @click="navigateToLightLevelMenu">
        {{ stepperText.step02 }}
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step editable step="3" @click="navigateToEaseOfCareMenu">
        {{ stepperText.step03 }}
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step editable step="4" @click="navigateToPetSafeMenu">
        {{ stepperText.step04 }}
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  name: "Stepper",
  data() {
    return {
      e1: 1
    };
  },
  computed: {
    stepperText() {
      return this.$store.state.stepperText;
    },
    plantSizeMenu() {
      return this.$store.state.menus.plantSize;
    },
    lightLevelMenu() {
      return this.$store.state.menus.lightLevel;
    },
    easeOfCareMenu() {
      return this.$store.state.menus.easeOfCare;
    },
    petSafeMenu() {
      return this.$store.state.menus.petSafe;
    }
  },
  methods: {
    navigateToPlantSizeMenu() {
      this.$router.push("plant-size");
    },
    navigateToLightLevelMenu() {
      this.$router.push("light-level");
    },
    navigateToEaseOfCareMenu() {
      this.$router.push("ease-of-care");
    },
    navigateToPetSafeMenu() {
      this.$router.push("pet-safe-menu");
    }
  }
};
</script>
