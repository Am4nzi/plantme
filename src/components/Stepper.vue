<template class="fixed">
  <div>
    <!--    Stepper component documentation: https://vuetifyjs.com/en/components/steppers/-->
    <v-stepper
      v-if="getStepperText[0]"
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
          {{ getStepperText[0].text }}
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
          {{ getStepperText[1].text }}
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
          {{ getStepperText[2].text }}
        </v-stepper-step>
        <v-divider :color="togglePetSafeEditable ? 'grey' : false"></v-divider>
        <v-stepper-step
          color="grey darken-3"
          :editable="togglePetSafeEditable ? true : false"
          step="4"
          :complete="menuIndex > 4"
          @click="navigateToPetSafeMenu"
        >
          {{ getStepperText[3].text }}
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
    ...mapGetters(["getStepperText"]),
    ...mapGetters(["getStepperHasActivated"]),
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
      this.$store.commit("setMenuIndexNumber", 0);
      this.$router.push("plant-size");
    },
    navigateToLightLevelMenu() {
      if (this.getStepperHasActivated.lightLevel) {
        this.toggleEnableEditSteps.lightLevel = true;
        this.$store.commit("setMenuIndexNumber", 1);
        this.$router.push("light-level");
      }
    },
    navigateToEaseOfCareMenu() {
      if (this.getStepperHasActivated.easeOfCare) {
        this.toggleEnableEditSteps.easeOfCare = true;
        this.$store.commit("setMenuIndexNumber", 2);
        this.$router.push("ease-of-care");
      }
    },
    navigateToPetSafeMenu() {
      if (this.getStepperHasActivated.petSafe) {
        this.toggleEnableEditSteps.petSafe = true;
        this.$store.commit("setMenuIndexNumber", 3);
        this.$router.push("pet-safe-menu");
      }
    }
  }
};
</script>