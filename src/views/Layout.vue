<template>
  <!--  <v-app style="background-color: #E8F5E9;" class="bg">-->
  <v-app class="background">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="11" lg="11" xl="10">
            <!--    <Card.vue />-->
            <router-view />
            <v-row align="center" justify="end">
              <div class="mt-6 mr-4">
                <v-btn
                  @click="nextStep"
                  x-large
                  color="#fcc7b8"
                  class="black--text mr-n1 rounded"
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
  computed: {
    ...mapGetters(["getPreviousMenuSelection"]),
    ...mapGetters(["getMenuTitles"]),
    //If no user selection for current view exists in store, function returns false and button is disabled
    toggleActivateButton() {
      const { name } = this.$route;
      switch (name) {
        case "PlantSizeMenu":
          return Boolean(!this.getPreviousMenuSelection.plantSize[0]);
        case "LightLevelMenu":
          return Boolean(!this.getPreviousMenuSelection.lightLevel[0]);
        case "EaseOfCareMenu":
          return Boolean(!this.getPreviousMenuSelection.easeOfCare[0]);
        case "PetSafeMenu":
          return Boolean(!this.getPreviousMenuSelection.petSafe[0]);
        default:
          return "Error in toggleActivateButton /Layout.vue";
      }
    }
  },
  beforeMount() {
    //Handle refresh safely
    this.$router.push({ name: "PlantSizeMenu" });
  },
  methods: {
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
        default:
          alert("Note from developer: Results page is still in development.");
          return "PetSafeMenu";
      }
    },
    nextStep() {
      const nextRoute = this.getNextRoute();
      if (nextRoute === "LightLevelMenu") {
        this.$store.commit("setMenuTitle", this.getMenuTitles[1].menutitle);
        this.$store.commit("setMenuIndex", 2);
      }
      if (nextRoute === "EaseOfCareMenu") {
        this.$store.commit("setMenuTitle", this.getMenuTitles[2].menutitle);
        this.$store.commit("setMenuIndex", 3);
      }
      if (nextRoute === "PetSafeMenu") {
        this.$store.commit("setMenuTitle", this.getMenuTitles[3].menutitle);
        this.$store.commit("setMenuIndex", 4);
      }
      this.$router.push({ name: nextRoute });
    }
  }
};
</script>

<style>
@media (min-width: 600px) {
  .background {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  .background:before {
    content: "";
    display: block;
    width: 905px;
    height: 0px;
    border-style: solid;
    border-width: 0px 0px 1033px 595px;
    border-color: transparent transparent #c4f5e1 transparent;
    position: absolute;
    right: 0px;
  }
}

@media (max-width: 600px) {
  .background {
    background-color: #c4f5e1 !important;
  }
}
</style>
