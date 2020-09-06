<template>
  <div>
    <v-main>
      <v-container fluid class="fill-height pt-0">
        <v-row>
          <v-col>
            <v-item-group
              v-model="selected.itemGroup"
              :mandatory="mandatory"
              :multiple="multiple"
            >
              <v-row
                v-if="Object.keys(this.getFilteredResults).length > 0"
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
                  class="d-flex flex-column"
                  :class="{ active: plant === activeItem }"
                  cols="12"
                  xs="12"
                  sm="imageColSMLayout"
                  md="6"
                  :lg="imageColLGLayout"
                  :xl="imageColXLLayout"
                >
                  <v-item v-slot:default="{ active }">
                    <v-card
                      elevation="0"
                      v-resize="onResize"
                      :color="active ? 'primary' : ''"
                      tile
                      class="mx-auto"
                      height="385"
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
              <v-col v-else>
                <v-row>
                  <h2>No results found</h2>
                </v-row>
                <v-row>
                  <p>Please try a different search combination</p>
                </v-row>
              </v-col>
            </v-item-group>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
    imageColSMLayout() {
      if (this.windowSize.x <= 695) {
        return "12";
      } else return "6";
    },
    imageColLGLayout() {
      if (Object.keys(this.getFilteredResults).length === 1) {
        return "12";
      } else if (Object.keys(this.getFilteredResults).length === 2) {
        return "6";
      } else if (Object.keys(this.getFilteredResults).length === 3) {
        return "5";
      } else if (this.drawer) {
        return "4";
      } else return "4";
    },
    imageColXLLayout() {
      if (Object.keys(this.getFilteredResults).length === 1) {
        return "12";
      } else if (Object.keys(this.getFilteredResults).length === 2) {
        return "6";
      } else if (Object.keys(this.getFilteredResults).length === 3) {
        return "4";
      } else if (this.drawer) {
        return "4";
      } else return "3";
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
    openModal() {
      this.$store.dispatch("updateModalActive", true);
      this.$router.push({ name: "PetSafeMenu" });
    }
  }
};
</script>
