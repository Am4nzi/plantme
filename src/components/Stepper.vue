<template class="fixed">
  <div>
    <!--    Stepper component documentation: https://vuetifyjs.com/en/components/steppers/-->
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
        <v-divider
          :color="toggleLightLevelEditable ? 'teal' : false"
        ></v-divider>
        <v-stepper-step
          color="teal"
          :editable="toggleLightLevelEditable ? true : false"
          step="2"
          :complete="menuIndex > 2"
          @click="navigateToLightLevelMenu"
        >
          {{ stepperText.step02.label }}
        </v-stepper-step>
        <v-divider
          :color="toggleEaseOfCareEditable ? 'teal' : false"
        ></v-divider>
        <v-stepper-step
          color="teal"
          :editable="toggleEaseOfCareEditable ? true : false"
          step="3"
          :complete="menuIndex > 3"
          @click="navigateToEaseOfCareMenu"
        >
          {{ stepperText.step03.label }}
        </v-stepper-step>
        <v-divider :color="togglePetSafeEditable ? 'teal' : false"></v-divider>
        <v-stepper-step
          color="teal"
          :editable="togglePetSafeEditable ? true : false"
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
      toggleEnableEditSteps: {
        lightLevel: false,
        easeOfCare: false,
        petSafe: false
      },
      menuHeadingText: {
        plantSize: "Select Plant Size",
        lightLevel: "Select Light Level",
        easeOfCare: "Ease of Care",
        petSafe: "Pet Safe?"
      }
    };
  },
  computed: {
    toggleLightLevelEditable() {
      if (
        this.$store.state.menu.indexNumber === 2 ||
        this.$store.state.menu.indexNumber === 3 ||
        this.$store.state.menu.indexNumber === 4
      ) {
        return true;
      } else {
        return false;
      }
    },
    toggleEaseOfCareEditable() {
      if (
        this.$store.state.menu.indexNumber === 3 ||
        this.$store.state.menu.indexNumber === 4
      ) {
        return true;
      } else {
        return false;
      }
    },
    togglePetSafeEditable() {
      if (this.$store.state.menu.indexNumber === 4) {
        return true;
      } else {
        return false;
      }
    },
    stepperText() {
      return this.$store.state.stepperText;
    },
    menuIndex: {
      get: function() {
        return this.$store.state.menu.indexNumber;
      },
      set: function(indexNumber) {
        return indexNumber;
      }
    }
  },
  methods: {
    navigateToPlantSizeMenu() {
      this.$store.commit("setMenuIndex", 1);
      this.$store.commit("setMenuTitle", this.menuHeadingText.plantSize);
      this.$router.push("plant-size");
    },
    navigateToLightLevelMenu() {
      if (this.$store.state.menuSelections.menuSelection.plantSize[0]) {
        this.toggleEnableEditSteps.lightLevel = true;
        this.$store.commit("setMenuIndex", 2);
        this.$store.commit("setMenuTitle", this.menuHeadingText.lightLevel);
        this.$router.push("light-level");
      }
    },
    navigateToEaseOfCareMenu() {
      if (this.$store.state.menuSelections.menuSelection.lightLevel[0]) {
        this.toggleEnableEditSteps.easeOfCare = true;
        this.$store.commit("setMenuIndex", 3);
        this.$store.commit("setMenuTitle", this.menuHeadingText.easeOfCare);
        this.$router.push("ease-of-care");
      }
    },
    navigateToPetSafeMenu() {
      if (this.$store.state.menuSelections.menuSelection.easeOfCare[0]) {
        this.toggleEnableEditSteps.petSafe = true;
        this.$store.commit("setMenuIndex", 4);
        this.$store.commit("setMenuTitle", this.menuHeadingText.petSafe);
        this.$router.push("pet-safe-menu");
      }
    }
  }
};
</script>
