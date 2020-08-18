<template>
  <v-container fluid class="fill-height modal">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="11" lg="11" xl="10">
        <v-card elevation="14" class="pb-sm-4">
          <Stepper :class="{ fixed: hasScrolled }" />
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
import Stepper from "../components/Stepper";
export default {
  name: "Card",
  components: {
    ExpansionPanel,
    Stepper
  },
  data: () => ({
    filtered: {},
    userSelections: []
  }),
  mounted() {
    this.scroll();
    this.$store.dispatch("updateInitialViewData");
  },
  created() {
    this.$store.dispatch("updateHasScrolled", false);
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
    getCurrentRoute() {
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          return "PlantSizeMenu";
        case "LightLevelMenu":
          return "LightLevelMenu";
        case "EaseOfCareMenu":
          return "EaseOfCareMenu";
        case "PetSafeMenu":
          return "PetSafeMenu";
        default:
          return "PlantSizeMenu";
      }
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
          return "Home";
        default:
          alert("Note from developer: Results page is still in development.");
          return "PetSafeMenu";
      }
    },
    async nextStep() {
      const nextRoute = this.getNextRoute();
      if (nextRoute === "LightLevelMenu") {
        await this.$store.dispatch("updateViewLightLevelMenu");
        this.$store.commit("setMenuTitle", this.getMenuTitles[1].menutitle);
        this.$store.commit("setMenuIndex", 2);
      } else if (nextRoute === "EaseOfCareMenu") {
        await this.$store.dispatch("updateViewEaseOfCareMenu");
        this.$store.commit("setMenuTitle", this.getMenuTitles[2].menutitle);
        this.$store.commit("setMenuIndex", 3);
      } else if (nextRoute === "PetSafeMenu") {
        await this.$store.dispatch("updateViewPetSafeMenu");
        this.$store.commit("setMenuTitle", this.getMenuTitles[3].menutitle);
        this.$store.commit("setMenuIndex", 4);
      } else {
        for (const property in this.getPlantsData) {
          if (
            this.getPlantsData[property].properties.some(
              sizeProperty =>
                this.getPreviousMenuSelection.plantSize.titles.indexOf(
                  sizeProperty
                ) >= 0
            ) &&
            this.getPlantsData[property].properties.some(
              lightLevelProperty =>
                this.getPreviousMenuSelection.lightLevel.titles.indexOf(
                  lightLevelProperty
                ) >= 0
            ) &&
            this.getPlantsData[property].properties.some(
              easeOfCareProperty =>
                this.getPreviousMenuSelection.easeOfCare.titles.indexOf(
                  easeOfCareProperty
                ) >= 0
            ) &&
            this.getPlantsData[property].properties.some(
              petSafeProperty =>
                this.getPreviousMenuSelection.petSafe.titles.indexOf(
                  petSafeProperty
                ) >= 0
            )
          ) {
            this.filtered[property] = this.getPlantsData[property];
          }
        }
        await this.$store.dispatch("updateFilteredSelection", this.filtered);
        await this.$store.dispatch("updateModalActive", false);
        await this.$store.dispatch("updateModalClosedOnce", true);
      }
      await this.$router.push({ name: nextRoute });
    }
  },
  computed: {
    ...mapGetters(["getPreviousMenuSelection"]),
    ...mapGetters(["getAllMenuSelections"]),
    ...mapGetters(["getMenuTitles"]),
    ...mapGetters(["getPlantsData"]),
    ...mapGetters(["getSelected"]),
    hasScrolled() {
      return this.$store.getters.getHasScrolled;
    },
    getHasSelectedStatus() {
      return this.$store.getters.getHasSelected;
    },
    toggleActivateButton() {
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          return Boolean(!this.getHasSelectedStatus.plantSize);
        case "LightLevelMenu":
          return Boolean(!this.getHasSelectedStatus.lightLevel);
        case "EaseOfCareMenu":
          return Boolean(!this.getHasSelectedStatus.easeOfCare);
        case "PetSafeMenu":
          return Boolean(!this.getHasSelectedStatus.petSafe);
        default:
          return "Error in toggleActivateButton /Layout.vue";
      }
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
  background-color: rgba(0, 0, 0, 0.5);
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
