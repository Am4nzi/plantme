<template>
  <v-app style="background-color: #FFFCED;">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="10" lg="10">
            <!--    <Card.vue />-->
            <router-view :menuIndex="menuIndex" />
            <v-row align="center" justify="end">
              <div>
                <v-btn @click="nextStep" x-large color="teal" dark>Next</v-btn>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Layout",
  data: () => ({
    menuHeadingText: {
      plantSize: "Select Preferred Plant Size",
      lightLevel: "Select Light Level",
      easeOfCare: "Ease of Care",
      petSafe: "Pet Safe?"
    },
    stepperText: {
      step01: {
        id: 1,
        label: "Plant Size"
      },
      step02: {
        id: 2,
        label: "Light Level"
      },
      step03: {
        id: 3,
        label: "Ease of Care"
      },
      step04: {
        id: 4,
        label: "Pet Safe?"
      }
    }
  }),
  computed: {
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
    },
    //TODO Delete this
    menuIndex() {
      return this.$store.state.menus.index;
    }
  },
  created() {
    this.$store.dispatch(
      "updateMenuHeadingText",
      this.menuHeadingText.plantSize
    );
    this.$store.dispatch("updateStepperText", this.stepperText);
    //Set initial menu index as 1
    this.$store.dispatch("updateMenuIndex", 1);
  },
  methods: {
    nextStep() {
      const nextRoute = this.getNextRoute();
      if (nextRoute === "LightLevelMenu") {
        this.$store.dispatch(
          "updateMenuHeadingText",
          this.menuHeadingText.lightLevel
        );
        this.$store.dispatch("updateMenuIndex", 2);
      }
      if (nextRoute === "EaseOfCareMenu") {
        this.$store.dispatch(
          "updateMenuHeadingText",
          this.menuHeadingText.easeOfCare
        );
        this.$store.dispatch("updateMenuIndex", 3);
      }
      if (nextRoute === "PetSafeMenu") {
        this.$store.dispatch(
          "updateMenuHeadingText",
          this.menuHeadingText.petSafe
        );
        this.$store.dispatch("updateMenuIndex", 4);
      }
      this.$router.push({ name: nextRoute });
    },
    getNextRoute() {
      this.$store.dispatch("updateMenuHeadingText", "Select Light Level");
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          return "LightLevelMenu";
        case "LightLevelMenu":
          return "EaseOfCareMenu";
        case "EaseOfCareMenu":
          return "PetSafeMenu";
        default:
          alert("Something went wrong !!!");
          return "SomethingWentWrong";
      }
    }
  },
  components: {}
};
</script>
