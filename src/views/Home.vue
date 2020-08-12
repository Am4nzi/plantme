<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      <v-container fluid class="fill-height">
        <v-item-group
          v-model="selected"
          :mandatory="mandatory"
          :multiple="multiple"
        >
          <v-row>
            <v-col
              v-for="plant in getPlantsData"
              :key="plant.id"
              class="d-flex flex-column"
              :class="{ active: plant === activeItem }"
              cols="6"
              xs="12"
              sm="6"
              md="6"
              lg="6"
              xl="6"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-card
                  :color="active ? '#fcc7b8' : ''"
                  outlined
                  tile
                  class="mx-auto"
                  max-width="385"
                  height="385"
                  @click="
                    toggle();
                    selectItem(plant, 'setPlantSizeMenuSelection');
                  "
                >
                  <v-hover v-slot:default="{ hover }">
                    <v-img :src="plant.image" height="385" class="align-end">
                      <v-card color="#fcc7b8" tile>
                        <v-card-title v-if="hover">
                          {{ plant.name }}
                        </v-card-title>
                      </v-card>
                    </v-img>
                  </v-hover>
                </v-card>
              </v-item>
              <h6 class="text-center mt-2">
                {{ plant.name }}
              </h6>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-main>

    <v-footer color="#c4f5e1" app>
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
    mandatory: false,
    multiple: true,
    selected: [],
    activeItem: null,
    menu: {
      plantSizeData: [],
      previousSelection: ""
    }
  }),
  computed: {
    ...mapGetters(["getModalStatus"]),
    ...mapGetters(["getPlantsData"]),
    getMenuData() {
      return this.$store.getters.getMenuData;
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
    console.log("plantsdata: ", this.getPlantsData);
  }
};
</script>
