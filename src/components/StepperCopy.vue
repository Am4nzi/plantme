<template>
  <div>
    <v-stepper
      class="blue-grey elevation-0 rounded-tl-sm rounded-t4-sm rounded-bl-0 rounded-br-0 lighten-5"
      v-model="menuIndex"
    >
      <v-stepper-header>
        <v-stepper-step
          editable
          step="1"
          :complete="{menuIndex} > 1"
          @click="navigateToPlantSizeMenu"
        >
          {{ stepperText.step01 }}
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          step="2"
          :complete="{menuIndex} > 2"
          @click="navigateToLightLevelMenu"
        >
          {{ stepperText.step02 }}
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="3" :complete="e1 > 3" @click="navigateToEaseOfCareMenu">
          {{ stepperText.step03 }}
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="4" :complete="e1 > 4" @click="navigateToPetSafeMenu">
          {{ stepperText.step04 }}
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <v-btn color="primary" @click="buttonFunc">
      Continue
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  data() {
    return {
      e1: null
    };
  },
  computed: {
    stepperText() {
      return this.$store.state.stepperText;
    },
  },
  methods: {
    navigateToPlantSizeMenu() {
      this.e1 = 1;
      this.$store.dispatch("updateMenuIndex", 2);
      console.log('this.menuIndex: ', this.menuIndex);
      this.$router.push("plant-size");
    },
    navigateToLightLevelMenu() {
      this.e1 = 2;
      this.$store.dispatch("updateMenuIndex", 2);
      console.log('this.menuIndex: ', this.menuIndex);
      this.$router.push("light-level");
    },
    navigateToEaseOfCareMenu() {
      this.e1 = 3;
      this.$store.dispatch("updateMenuIndex", 3);
      console.log('this.menuIndex: ', this.menuIndex);
      this.$router.push("ease-of-care");
    },
    navigateToPetSafeMenu() {
      this.e1 = 4;
      this.$store.dispatch("updateMenuIndex", 4);
      console.log('this.menuIndex: ', this.menuIndex);
      this.$router.push("pet-safe-menu");
    }
  }
};
</script>
