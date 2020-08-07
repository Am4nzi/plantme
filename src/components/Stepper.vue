<template class="fixed">
  <div>
    <!--    Stepper component documentation: https://vuetifyjs.com/en/components/steppers/-->
    <v-stepper
      class="white elevation-0 rounded-tl-sm rounded-t4-sm rounded-bl-0 rounded-br-0 lighten-5"
      v-model="menuIndex"
    >
      <v-stepper-header>
        <v-stepper-step
          color="grey darken-3"
          editable
          step="1"
          :complete="menuIndex > 1"
          @click="navigateToPlantSizeMenu"
        >
          {{ stepperText[0].text }}
        </v-stepper-step>
        <v-divider
          :color="toggleLightLevelEditable ? 'grey' : false"
        ></v-divider>
        <v-stepper-step
          color="grey darken-3"
          :editable="toggleLightLevelEditable ? true : false"
          step="2"
          :complete="menuIndex > 2"
          @click="navigateToLightLevelMenu"
        >
          {{ stepperText[1].text }}
        </v-stepper-step>
        <v-divider
          :color="toggleEaseOfCareEditable ? 'grey' : false"
        ></v-divider>
        <v-stepper-step
          color="grey darken-3"
          :editable="toggleEaseOfCareEditable ? true : false"
          step="3"
          :complete="menuIndex > 3"
          @click="navigateToEaseOfCareMenu"
        >
          {{ stepperText[2].text }}
        </v-stepper-step>
        <v-divider :color="togglePetSafeEditable ? 'grey' : false"></v-divider>
        <v-stepper-step
          color="grey darken-3"
          :editable="togglePetSafeEditable ? true : false"
          step="4"
          :complete="menuIndex > 4"
          @click="navigateToPetSafeMenu"
        >
          {{ stepperText[3].text }}
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "Stepper",
  data() {
    return {
      toggleEnableEditSteps: {
        lightLevel: false,
        easeOfCare: false,
        petSafe: false
      }
    };
  },
  computed: {
    ...mapGetters(["getMenuData"]),
    ...mapGetters(["getMenuTitles"]),
    menuIndexNumber() {
      return this.$store.getters.getMenuIndexNumber;
    },
    toggleLightLevelEditable() {
      if (
        this.menuIndexNumber === 2 ||
        this.menuIndexNumber === 3 ||
        this.menuIndexNumber === 4
      ) {
        return true;
      } else {
        return false;
      }
    },
    toggleEaseOfCareEditable() {
      if (this.menuIndexNumber === 3 || this.menuIndexNumber === 4) {
        return true;
      } else {
        return false;
      }
    },
    togglePetSafeEditable() {
      if (this.menuIndexNumber === 4) {
        return true;
      } else {
        return false;
      }
    },
    stepperText() {
      return this.$store.getters.getStepperText;
    },
    menuIndex: {
      get: function() {
        return this.menuIndexNumber;
      },
      set: function(indexNumber) {
        return indexNumber;
      }
    }
  },
  methods: {
    navigateToPlantSizeMenu() {
      this.$store.commit("setMenuIndex", 1);
      this.$store.commit("setMenuTitle", this.getMenuTitles[0].menutitle);
      this.$router.push("plant-size");
    },
    navigateToLightLevelMenu() {
      if (this.$store.state.menuSelections.menuSelection.plantSize[0]) {
        this.toggleEnableEditSteps.lightLevel = true;
        this.$store.commit("setMenuIndex", 2);
        this.$store.commit("setMenuTitle", this.getMenuTitles[1].menutitle);
        this.$router.push("light-level");
      }
    },
    navigateToEaseOfCareMenu() {
      if (this.$store.state.menuSelections.menuSelection.lightLevel[0]) {
        this.toggleEnableEditSteps.easeOfCare = true;
        this.$store.commit("setMenuIndex", 3);
        this.$store.commit("setMenuTitle", this.getMenuTitles[2].menutitle);
        this.$router.push("ease-of-care");
      }
    },
    navigateToPetSafeMenu() {
      if (this.$store.state.menuSelections.menuSelection.easeOfCare[0]) {
        this.toggleEnableEditSteps.petSafe = true;
        this.$store.commit("setMenuIndex", 4);
        this.$store.commit("setMenuTitle", this.getMenuTitles[3].menutitle);
        this.$router.push("pet-safe-menu");
      }
    }
  }
};
</script>
