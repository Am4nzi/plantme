<template>
  <div>
    <v-stepper v-model="getStepperActiveStep" class="elevation-0">
      <v-stepper-header>
        <template v-for="stepNumber in getStepperStepNumber">
          <v-stepper-step
            color="grey darken-3"
            :key="`${stepNumber}-step`"
            :complete="getStepperActiveStep > stepNumber"
            :step="stepNumber"
            editable
            @click="navigateToMenu(stepNumber)"
          >
            Step {{ stepNumber }}
          </v-stepper-step>

          <v-divider
            v-if="stepNumber !== getStepperStepNumber"
            :key="stepNumber"
          ></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  computed: {
    ...mapGetters(["getStepperStepNumber"]),
    ...mapGetters(["getMenuIndexNumber"]),
    ...mapGetters(["getStepperActiveStep"])
  },

  watch: {
    getStepperStepNumber(val) {
      if (this.getStepperActiveStep > val) {
        this.getStepperActiveStep = val;
      }
    }
  },

  methods: {
    async navigateToMenu(stepNumber) {
      //-1 because Vuetify index starts at 1 but menu index number starts at 0
      await this.$store.dispatch("updateMenuIndexNumber", stepNumber - 1);
      switch (stepNumber) {
        case 1:
          await this.$router.push("plant-size");
          break;
        case 2:
          await this.$store.dispatch("updateViewLightLevelMenu");
          await this.$router.push("light-level");
          break;
        case 3:
          await this.$store.dispatch("updateViewEaseOfCareMenu");
          await this.$router.push("ease-of-Care");
          break;
        case 4:
          await this.$store.dispatch("updateViewPetSafeMenu");
          await this.$router.push("pet-safe-menu");
          break;
        default:
          return "Error in setPlantSizeMenuUserSelectionTitles";
      }
    }
  }
};
</script>
