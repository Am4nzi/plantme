<template>
  <v-app id="inspire">
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

    <v-item-group
      v-model="selected"
      :mandatory="mandatory"
      :multiple="multiple"
    >
      <v-container>
        <v-row class="mb-4">
          <Heading />
        </v-row>
        <v-row class="right-margin">
          <v-col
            v-for="item in getMenuData.plantSize"
            :key="item.id"
            class="d-flex"
            :class="{ active: item === activeItem }"
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
                  selectItem(item, 'setPlantSizeMenuSelection');
                "
              >
                <v-hover v-slot:default="{ hover }">
                  <v-img :src="item.image" height="385" class="align-end">
                    <v-card color="#fcc7b8" tile>
                      <v-card-title v-if="hover">
                        Plant Name
                      </v-card-title>
                    </v-card>
                  </v-img>
                </v-hover>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <v-footer color="#c4f5e1" app>
      <span class="grey--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Results",
  components: {},
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
  }
};
</script>

<style>
.right-margin {
  margin: 0 18% 0 13%;
}
</style>
