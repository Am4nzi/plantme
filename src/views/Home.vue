<template>
  <div>
    <v-navigation-drawer v-model="drawer" width="300" app>
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
                  v-model="currentMenuSelectionPlantSize"
                  multiple
                  mandatory
                  column
                  active-class="highlight--text"
                >
                  <v-chip
                    outlined
                    label
                    large
                    v-for="item in getMenuData.plantSize"
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
              Light Level
            </h6>
            <v-row justify="start">
              <v-col>
                <v-chip-group
                  v-model="currentMenuSelectionLightLevel"
                  multiple
                  mandatory
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
                  multiple
                  mandatory
                  column
                  active-class="highlight--text"
                >
                  <v-chip
                    v-model="currentMenuSelectionEaseOfCare"
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
                  v-model="currentMenuSelectionPetSafe"
                  multiple
                  mandatory
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
        <div class="my-2">
          <v-btn @click="resetMenuSelection" small>Reset Menu Selection</v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="grey"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>UNDER CONSTRUCTION</v-toolbar-title>
    </v-app-bar>

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
              v-for="plant in getFilteredSelection"
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
                  <v-hover v-slot:default="{ hover }">
                    <v-img :src="plant.image" height="385" class="align-end">
                      <v-card color="primary" tile>
                        <v-card-title v-if="hover">
                          {{ plant.name }}
                        </v-card-title>
                      </v-card>
                    </v-img>
                  </v-hover>
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

    <v-footer color="secondary" app>
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
    drawer: null,
    windowSize: {
      x: 0,
      y: 0
    },
    mandatory: false,
    multiple: true,
    selected: {
      itemGroup: []
    },
    plantSizeSelected: [],
    activeItem: null,
    menu: {
      plantSizeData: [],
      previousSelection: ""
    }
  }),
  computed: {
    ...mapGetters(["getModalStatus"]),
    ...mapGetters(["getPlantsData"]),
    ...mapGetters(["getFilteredSelection"]),
    currentMenuSelectionPlantSize: {
      get: function() {
        return this.$store.getters.getPreviousMenuSelection.plantSize.indexes;
      },
      set: function(indexNumber) {
        return indexNumber;
      }
    },
    currentMenuSelectionLightLevel: {
      get: function() {
        return this.$store.getters.getPreviousMenuSelection.lightLevel.indexes;
      },
      set: function(indexNumber) {
        return indexNumber;
      }
    },
    currentMenuSelectionEaseOfCare: {
      get: function() {
        return this.$store.getters.getPreviousMenuSelection.easeOfCare.indexes;
      },
      set: function(indexNumber) {
        return indexNumber;
      }
    },
    currentMenuSelectionPetSafe: {
      get: function() {
        return this.$store.getters.getPreviousMenuSelection.petSafe.indexArray;
      },
      set: function(indexNumber) {
        return indexNumber;
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
      this.selected = val
        ? this.selected >= 0
          ? [this.selected]
          : []
        : this.selected.pop();
    }
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
    resetMenuSelection() {
      this.$store.commit("setClearMenuSelections");
    }
  }
};
</script>
