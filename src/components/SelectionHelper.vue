<template>
  <v-container fluid class="fill-height modal">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="11" lg="10" xl="8">
        <v-card elevation="14" class="pb-8">
          <Stepper :class="{ fixed: hasScrolled }" class="mb-4" />
          <Heading class="mb-2"/>
          <!--    Menu views-->
          <router-view />
          <ExpansionPanel v-if="getMenuIndex < 3" class="d-sm-none" />
        </v-card>
        <v-row align="center" justify="end">
          <div class="mt-6 mr-4">
            <v-btn
              @click="nextStep"
              x-large
              color="primary"
              class="black--text mr-n1 rounded"
              :disabled="toggleActivateButton"
              >Next
            </v-btn>
          </div>
          <div></div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
import ExpansionPanel from "./ExpansionPanel";
import Stepper from "./Stepper";
import Heading from "./Heading";
export default {
  name: "Card",
  components: {
    ExpansionPanel,
    Stepper,
    Heading
  },
  data: () => ({
    userSelections: []
  }),
  computed: {
    ...mapGetters(["getUserSelections"]),
    ...mapGetters(["getMenuTitles"]),
    ...mapGetters(["getPlantsData"]),
    ...mapGetters(["getUserSelectionIndexes"]),
    ...mapGetters(["getModalClosedOnce"]),
    ...mapGetters(["getStepperStepNumber"]),
    ...mapGetters(["getMenuIndexNumber"]),
    hasScrolled() {
      return this.$store.getters.getHasScrolled;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    toggleActivateButton() {
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          if (!this.getUserSelections.titles.plantSizeMenu.length > 0) {
            return true;
          }
          break;
        case "LightLevelMenu":
          if (!this.getUserSelectionIndexes.lightLevelMenu.length > 0) {
            return true;
          }
          break;
        case "EaseOfCareMenu":
          if (!this.getUserSelectionIndexes.easeOfCareMenu.length > 0) {
            return true;
          }
          break;
        case "PetSafeMenu":
          if (!this.getUserSelections.titles.petSafeMenu.length > 0) {
            return true;
          }
          break;
        default:
          return "Error in toggleActivateButton /Layout.vue";
      }
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        if (window.pageYOffset > 25) {
          this.$store.dispatch("updateHasScrolled", true);
        }
        if (window.pageYOffset < 25) {
          this.$store.dispatch("updateHasScrolled", false);
        }
      };
    },
    getNextRoute() {
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          return "LightLevelMenu";
        case "LightLevelMenu":
          return "EaseOfCareMenu";
        case "EaseOfCareMenu":
          return "PetSafeMenu";
        case "PetSafeMenu":
          return "Layout";
      }
    },
    async nextStep() {
      if (this.getMenuIndexNumber < 3) {
        await this.$store.dispatch(
          "updateMenuIndexNumber",
          this.getMenuIndexNumber + 1
        );
      }
      await this.$store.dispatch(
        "updateStepperActiveStep",
        this.getMenuIndexNumber + 1
      );
      this.getStepperActiveStep = this.getMenuIndexNumber + 1;

      const nextRoute = this.getNextRoute();

      switch (nextRoute) {
        case "LightLevelMenu":
          this.$store.commit("setMenuIndexNumber", 1);
          await this.$store.dispatch("updateViewLightLevelMenu");
          break;
        case "EaseOfCareMenu":
          this.$store.commit("setMenuIndexNumber", 2);
          await this.$store.dispatch("updateViewEaseOfCareMenu");
          break;
        case "PetSafeMenu":
          this.$store.commit("setMenuIndexNumber", 3);
          await this.$store.dispatch("updateViewPetSafeMenu");
          break;
        default:
          if (!this.getModalClosedOnce) {
            await this.$store.dispatch("updatePlantLibraryData");
          }

          //mixin filterResults.js
          await this.filterResults();

          await this.$store.dispatch("updateModalActive", false);
          if (this.getModalClosedOnce === false) {
            await this.$store.dispatch("updateModalClosedOnce", true);
          }
      }

      await this.$router.push({ name: nextRoute });
    }
  }
};
</script>

<style>
.card-image {
  width: 100%;
  height: 200px !important;
}

.modal {
  background-image: url("https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
  background-size: cover;
}

@media (max-width: 600px) {
  .fixed {
    position: sticky;
    position: -webkit-sticky;
    z-index: 10;
    width: 100%;
    top: 0;
    left: 0;
  }

  .card-image {
    width: 100%;
    height: 130px !important;
  }
}
</style>
