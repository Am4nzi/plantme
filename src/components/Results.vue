<template>
  <div>
    <v-main>
      <v-dialog
        v-model="getModalStatus"
        fullscreen
        persistent
        transition="false"
      >
        <router-view />
      </v-dialog>
      <v-container fluid class="fill-height pl-xl-16 pr-xl-16">
        <v-item-group
          v-model="selected.itemGroup"
          :mandatory="mandatory"
          :multiple="multiple"
        >
          <v-row
            class="justify-xl-start
        justify-lg-start
        justify-md-start
        justify-sm-start
        justify-xs-start"
            dense
          >
            <v-col
              v-for="plant in getFilteredResults"
              :key="plant.id"
              class="d-flex flex-column pl-xl-16 pr-xl-16"
              :class="{ active: plant === activeItem }"
              cols="12"
              xs="12"
              :sm="imageColSMLayout"
              md="6"
              lg="4"
              :xl="imageColXLLayout"
            >
              <v-item v-slot:default="{ active }">
                <v-card
                  elevation="0"
                  v-resize="onResize"
                  :color="active ? 'primary' : ''"
                  tile
                  class="mx-auto"
                  :max-width="imageWidth"
                  height="[385]"
                >
                  <v-img :src="plant.image" height="385" class="align-end">
                  </v-img>
                </v-card>
              </v-item>
              <h6 class="text-center mt-2 mb-8">
                {{ plant.name }}
              </h6>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-main>

    <v-footer color="white" app>
      <span class="grey--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "Home",
  props: {
    source: String
  },
  data: () => ({
    filteredHome: {},
    newValue: [],
    drawer: null,
    windowSize: {
      x: 0,
      y: 0
    },
    mandatory: false,
    multiple: true,
    selected: {
      itemGroup: [],
      plantSize: []
    },
    plantSizeSelected: [],
    activeItem: null,
    menu: {
      plantSizeData: [],
      previousSelection: ""
    }
  }),
  computed: {
    ...mapGetters(["getUserSelections"]),
    ...mapGetters(["getModalStatus"]),
    ...mapGetters(["getPlantsData"]),
    ...mapGetters(["getFilteredResults"]),
    plantSizeMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.plantSizeMenu;
      },
      set(value) {
        this.$store.commit("setPlantSizeMenuUserSelectionIndexes", value);
      }
    },
    lightLevelMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.lightLevelMenu;
      },
      set(value) {
        this.$store.commit("setLightLevelUserSelectionIndexes", value);
      }
    },
    easeOfCareMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.easeOfCareMenu;
      },
      set(value) {
        this.$store.commit("setEaseOfCareUserSelectionIndexes", value);
      }
    },
    petSafeMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.petSafeMenu;
      },
      set(value) {
        this.$store.commit("setPetSafeUserSelectionIndexes", value);
      }
    },
    getMenuData() {
      return this.$store.getters.getMenuData;
    },
    imageWidth() {
      if (this.windowSize.x <= 1620 && this.windowSize.x >= 1500) {
        return 385;
      } else if (this.windowSize.x <= 1500 && this.windowSize.x >= 1410) {
        return 340;
      } else if (this.windowSize.x <= 1410 && this.windowSize.x >= 1340) {
        return 330;
      } else if (this.windowSize.x <= 1340 && this.windowSize.x >= 1264) {
        return 300;
      } else if (this.windowSize.x <= 1264 && this.windowSize.x >= 960) {
        return 375;
      } else if (this.windowSize.x <= 969 && this.windowSize.x >= 865) {
        return 385;
      } else if (this.windowSize.x <= 865 && this.windowSize.x >= 740) {
        return 330;
      } else if (this.windowSize.x <= 740 && this.windowSize.x >= 695) {
        return 300;
      } else return 385;
    },
    imageColXLLayout() {
      if (this.drawer) {
        return "4";
      } else return "3";
    },
    imageColSMLayout() {
      if (this.windowSize.x <= 695) {
        return "12";
      } else return "6";
    }
  },
  watch: {
    multiple(val) {
      this.plantSizeMenuSelection = val
        ? this.plantSizeMenuSelection >= 0
          ? [this.plantSizeMenuSelection]
          : []
        : this.plantSizeMenuSelection.pop();
    }
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
    async activateFilterResults() {
      await this.filterResults();
    },
    openModal() {
      this.$store.dispatch("updateModalActive", true);
      this.$router.push({ name: "PetSafeMenu" });
    }
  }
};
</script>
