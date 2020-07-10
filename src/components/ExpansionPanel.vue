<template>
  <div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        Guide
        <v-icon class="mr-12">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <!--        Conditionally render different elements depending on current view-->
        <v-card-text
          v-if="
            getExpansionPanelText.heading === 'Size Guide' ||
              getExpansionPanelText.heading === 'Light Level Guide'
          "
        >
          <h2 class="teal--text mb-1 mt-4 ml-10">
            {{ getExpansionPanelText.heading }}
          </h2>
          <v-row class="justify-left">
            <v-col
              v-for="(value, key) in getExpansionPanelText.guide"
              :key="value"
              class="ml-10"
              cols="10"
              xs="12"
              sm="6"
              md="4"
              lg="2"
              xl="2"
            >
              <v-card outlined>
                <v-card-title
                  style="font-family: sofia-pro, sans-serif !important"
                  class="text-h6 custom-font-sofia-pro"
                  v-text="key"
                ></v-card-title>
                <v-card-subtitle
                  style="font-family: sofia-pro, sans-serif !important"
                  class="text-subtitle-1 custom-font-sofia-pro"
                  v-text="value"
                ></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <div
          v-else-if="
            getExpansionPanelText.heading === 'Ease of Care Guide' ||
              getExpansionPanelText.heading === 'Pet Safety Guide'
          "
        >
          <h2 class="teal--text mb-1 mt-4 ml-14">
            {{ getExpansionPanelText.heading }}
          </h2>
          <p
            class="mb-1 mt-4 ml-14 mb-8"
            style="max-width: 75%; text-align: justify; text-justify: inter-word;"
          >
            {{ getExpansionPanelText.guide }}
          </p>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "ExpansionPanel",
  data: () => ({
    show: false
  }),
  computed: {
    getMenuIndex() {
      return this.$store.state.menu.indexNumber;
    },
    getExpansionPanelText() {
      switch (this.getMenuIndex) {
        case 1:
          return this.$store.state.expansionPanelText.plantSize;
        case 2:
          return this.$store.state.expansionPanelText.lightLevel;
        case 3:
          return this.$store.state.expansionPanelText.easeOfCare;
        case 4:
          return this.$store.state.expansionPanelText.petSafe;
        default:
          return "Error in getExpansionPanelText() /ExpansionPanel.vue";
      }
    }
  }
};
</script>
