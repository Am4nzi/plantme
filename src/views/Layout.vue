<template>
  <v-app style="background-color: #FFFCED;">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="10" lg="10">
            <!--    <Card.vue />-->
            <router-view />
            <v-row align="center" justify="end">
              <div class="mt-6 mr-4">
                <v-btn
                  @click="nextStep"
                  x-large
                  depressed
                  color="teal"
                  class="white--text mr-n1 rounded"
                  :disabled="toggleActivateButton"
                  >Next</v-btn
                >
              </div>
              <div></div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "Layout",
  data: () => ({
    menuHeadingText: {
      plantSize: "Plant Size",
      lightLevel: "Light Level",
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
    },
    expansionPanelText: {
      plantSize: {
        heading: "Size Guide",
        guide: {
          Small: "0 - 80cm",
          Medium: "60 - 150cm",
          Large: "130 - 200cm",
          "Extra Large": "180cm +"
        }
      },
      lightLevel: {
        heading: "Light Level Guide",
        guide: {
          "Minimal Light": "Dark rooms with little to no light.",
          Shade: "Plant situated in darker part of room, such as a shadow.",
          "Indirect Light":
            "Plant situated in medium-lit room, not receiving direct light from window.",
          "Bright Indirect":
            "Plant situated in brightly lit room, not receiving direct light from window.",
          "Bright Direct":
            "Plant situated in brightly lit room receiving direct light from window."
        }
      },
      easeOfCare: {
        heading: "Ease of Care Guide",
        guide: `Plants don't live indoors by choice, and all require some maintenance if they are to thrive in this
        unnatural habitat, however, each has their own specific requirements. Some need more water than others, some
        require more pruning, whilst others are fussy about temperature. Taking all these factors into account,
        we have divided our plants into 'easy', 'medium' and 'difficult', based on the amount of time required
        to keep them happy and healthy.`
      },
      petSafe: {
        heading: "Pet Safety Guide",
        guide: `Certain species of indoor plants can be toxic to pets, either through ingestion or even simply
        by brushing up against them. This filter has been tailored to cats and dogs, so if you plan on putting your
        new plant in a room where your furry friends often roam, make sure to select the 'Safe' option.`
      }
    }
  }),
  created() {
    //Immediately dispatch static content to store, which can be rendered in any child component
    this.$store.commit("setMenuTitle", this.menuHeadingText.plantSize);
    this.$store.dispatch("updateStepperText", this.stepperText);
    this.$store.dispatch("updateExpansionPanelText", this.expansionPanelText);
  },
  computed: {
    ...mapGetters(["getPreviousMenuSelection"]),
    //If no user selection for current view exists in store, function returns false and button is disabled
    toggleActivateButton() {
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          return Boolean(
            !this.getPreviousMenuSelection.plantSize[0]
          );
        case "LightLevelMenu":
          return Boolean(
            !this.getPreviousMenuSelection.lightLevel[0]
          );
        case "EaseOfCareMenu":
          return Boolean(
            !this.getPreviousMenuSelection.easeOfCare[0]
          );
        case "PetSafeMenu":
          return Boolean(
            !this.getPreviousMenuSelection.petSafe[0]
          );
        default:
          return "Error in toggleActivateButton /Layout.vue";
      }
    }
  },
  methods: {
    getNextRoute() {
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          return "LightLevelMenu";
        case "LightLevelMenu":
          return "EaseOfCareMenu";
        case "EaseOfCareMenu":
          return "PetSafeMenu";
        default:
          alert("Note from developer: Results page is still in development.");
          return "PetSafeMenu";
      }
    },
    nextStep() {
      const nextRoute = this.getNextRoute();
      if (nextRoute === "LightLevelMenu") {
        this.$store.commit("setMenuTitle", this.menuHeadingText.lightLevel);
        this.$store.commit("setMenuIndex", 2);
      }
      if (nextRoute === "EaseOfCareMenu") {
        this.$store.commit("setMenuTitle", this.menuHeadingText.easeOfCare);
        this.$store.commit("setMenuIndex", 3);
      }
      if (nextRoute === "PetSafeMenu") {
        this.$store.commit("setMenuTitle", this.menuHeadingText.petSafe);
        this.$store.commit("setMenuIndex", 4);
      }
      this.$router.push({ name: nextRoute });
    }
  },
  components: {}
};
</script>
