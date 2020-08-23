<template>
  <div>
    <v-navigation-drawer v-model="navDrawerStatus" width="300" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <h2>Filter</h2>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <h6>
              Plant Size
            </h6>
            <v-row justify="start">
              <v-col>
                <v-chip-group
                  v-model="plantSizeMenuSelection"
                  :mandatory="mandatory"
                  multiple
                  column
                  active-class="highlight--text"
                >
                  <v-chip
                    v-for="item in getMenuData.plantSize"
                    :key="item.id"
                    outlined
                    label
                    large
                  >
                    {{ item.cardtitle }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <h6>
              Light Level
            </h6>
            <v-row justify="start">
              <v-col>
                <v-chip-group
                  v-model="lightLevelMenuSelection"
                  multiple
                  :mandatory="mandatory"
                  column
                  active-class="highlight--text"
                >
                  <v-chip
                    outlined
                    large
                    label
                    v-for="item in getMenuData.lightLevel"
                    :key="item.id"
                  >
                    {{ item.cardtitle }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <h6>
              Ease of Care
            </h6>
            <v-row justify="start">
              <v-col>
                <v-chip-group
                  v-model="easeOfCareMenuSelection"
                  multiple
                  :mandatory="mandatory"
                  column
                  active-class="highlight--text"
                >
                  <v-chip
                    outlined
                    label
                    large
                    v-for="item in getMenuData.easeOfCare"
                    :key="item.id"
                  >
                    {{ item.cardtitle }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <h6>
              Pet Safe?
            </h6>
            <v-row justify="start">
              <v-col>
                <v-chip-group
                  v-model="petSafeMenuSelection"
                  :mandatory="mandatory"
                  column
                  active-class="highlight--text"
                >
                  <v-chip
                    outlined
                    label
                    large
                    v-for="item in getMenuData.petSafe"
                    :key="item.id"
                  >
                    {{ item.cardtitle }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-btn @click="filterResults" small>Filter Results</v-btn>
        <v-btn @click="openModal"> Open Modal </v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: null,
    mandatory: false,
    multiple: true,
    selected: {
      itemGroup: [],
      plantSize: []
    },
    activeItem: null
  }),
  computed: {
    ...mapGetters(["getUserSelections"]),
    ...mapGetters(["getModalStatus"]),
    ...mapGetters(["getFilteredResults"]),
    ...mapGetters(["getPlantsData"]),
    navDrawerStatus: {
      get() {
        return this.$store.state.navDrawer.isActive;
      },
      set(value) {
        this.$store.dispatch("updateNavDrawerIsActive", value);
      }
    },
    plantSizeMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.plantSizeMenu;
      },
      set(value) {
        this.$store.commit("setPlantSizeMenuUserSelectionIndexes", value);
        this.handleNavDrawerUserSelections(
          "setPlantSizeMenuUserSelectionTitles"
        );
      }
    },
    lightLevelMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.lightLevelMenu;
      },
      set(value) {
        this.$store.commit("setLightLevelUserSelectionIndexes", value);
        this.handleNavDrawerUserSelections(
          "setLightLevelMenuUserSelectionTitles"
        );
      }
    },
    easeOfCareMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.easeOfCareMenu;
      },
      set(value) {
        this.$store.commit("setEaseOfCareUserSelectionIndexes", value);
        this.handleNavDrawerUserSelections(
          "setEaseOfCareMenuUserSelectionTitles"
        );
      }
    },
    petSafeMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.petSafeMenu;
      },
      set(value) {
        this.$store.commit("setPetSafeUserSelectionIndexes", value);
        this.handleNavDrawerUserSelections("setPetSafeMenuUserSelectionTitles");
      }
    },
    getMenuData() {
      return this.$store.getters.getMenuData;
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
  methods: {
    openModal() {
      this.$store.dispatch("updateModalActive", true);
      this.$router.push({ name: "PetSafeMenu" });
    }
  }
};
</script>
