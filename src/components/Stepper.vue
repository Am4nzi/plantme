<template>
  <div>
    <v-stepper
      class="blue-grey elevation-0 rounded-tl-sm rounded-t4-sm rounded-bl-0 rounded-br-0 lighten-5"
      v-model="menuIndex"
    >
      <v-stepper-header>
        <v-stepper-step
          color="teal"
          editable
          step="1"
          :complete="menuIndex > 1"
          @click="navigateToPlantSizeMenu"
        >
          {{ stepperText.step01.label }}
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          color="teal"
          editable
          step="2"
          :complete="menuIndex > 2"
          @click="navigateToLightLevelMenu"
        >
          {{ stepperText.step02.label }}
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          color="teal"
          editable
          step="3"
          :complete="menuIndex > 3"
          @click="navigateToEaseOfCareMenu"
        >
          {{ stepperText.step03.label }}
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          color="teal"
          editable
          step="4"
          :complete="menuIndex > 4"
          @click="navigateToPetSafeMenu"
        >
          {{ stepperText.step04.label }}
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  data() {
    return {
      e1: this.menuIndex,
      menuHeadingText: {
        plantSize: "Select Preferred Plant Size",
        lightLevel: "Select Light Level",
        easeOfCare: "Ease of Care",
        petSafe: "Pet Safe?"
      },
    };
  },
  computed: {
    stepperText() {
      return this.$store.state.stepperText;
    },
    menuIndex2() {
      return this.$store.state.menus.index;
    },
    menuIndex: {
      get: function () {
        return this.$store.state.menus.index;
      },
      set: function (menuIndex) {
        return menuIndex;
      },
    },
  },
  mounted() {
    this.e1 = this.menuIndex;
  },
  methods: {
    navigateToPlantSizeMenu() {
      this.e1 = 1;
      this.$store.dispatch("updateMenuIndex", 1);
      this.$store.dispatch(
        "updateMenuHeadingText",
        this.menuHeadingText.plantSize
      );
      this.$router.push("plant-size");
    },
    navigateToLightLevelMenu() {
      this.e1 = 2;
      this.$store.dispatch("updateMenuIndex", 2);
      this.$store.dispatch(
        "updateMenuHeadingText",
        this.menuHeadingText.lightLevel
      );
      this.$router.push("light-level");
    },
    navigateToEaseOfCareMenu() {
      this.e1 = 3;
      this.$store.dispatch("updateMenuIndex", 3);
      this.$store.dispatch(
        "updateMenuHeadingText",
        this.menuHeadingText.easeOfCare
      );
      console.log("this.menuIndex: ", this.menuIndex);
      this.$router.push("ease-of-care");
    },
    navigateToPetSafeMenu() {
      this.e1 = 4;
      this.$store.dispatch("updateMenuIndex", 4);
      this.$store.dispatch(
        "updateMenuHeadingText",
        this.menuHeadingText.petSafe
      );
      this.$router.push("pet-safe-menu");
    }
  }
};
</script>
