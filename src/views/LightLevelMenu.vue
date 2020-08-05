<template>
  <!--    v-item-group component documentation: https://vuetifyjs.com/en/components/item-groups//-->
  <v-item-group v-model="selected" :mandatory="mandatory">
    <v-container
      fluid
      fill-height
      class="pl-xl-8 
            pr-xl-8
            pb-xl-6
            pb-lg-6
            pa-md-4 
            pa-sm-4
            pl-2 pr-2"
    >
      <v-row class="justify-space-around mt-8 mb-8">
        <Heading />
      </v-row>
      <v-row
        class="justify-xl-space-around
        justify-lg-space-around
        justify-md-start
        justify-sm-start
        justify-xs-start"
        dense
      >
        <v-col
          v-for="item in this.menu.lightLevelData"
          :key="item.id"
          :class="{ active: item === activeItem }"
          cols="6"
          xs="12"
          sm="4"
          md="4"
          lg="2"
          xl="2"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'teal' : ''"
              outlined
              class="mx-auto"
              max-width="300"
              @click="
                toggle();
                selectItem(item, 'setLightLevelMenuSelection');
              "
            >
              <v-img :src="item.image" class="card-image"></v-img>
              <v-card-title
                :class="active ? 'white--text' : ''"
                style="word-break: keep-all;"
              >
                {{ item.cardtitle }}
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      class="ml-1 mt-1 close-button d-none d-sm-flex"
                      size="x-large"
                      v-bind="attrs"
                      v-on="on"
                      >mdi-information</v-icon
                    >
                  </template>
                  <span>{{ item.guideinfo }}</span>
                </v-tooltip>
              </v-card-title>
              <v-scroll-y-transition>
                <div v-if="active"></div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
import Heading from "../components/Heading";
export default {
  name: "LightLevelMenu",
  components: {
    Heading
  },
  data: () => ({
    mandatory: false,
    selected: null,
    activeItem: null,
    menu: {
      lightLevelData: []
    }
  }),
  computed: {
    ...mapGetters(["getMenuData"]),
    ...mapGetters(["getPreviousMenuSelection"])
  },
  mounted() {
    this.menu.lightLevelData = this.getMenuData.lightLevel;
    //Previous selection remains active if user navigates to a view they've already visited
    if (this.getPreviousMenuSelection.lightLevel) {
      this.selected = this.getPreviousMenuSelection.lightLevel[1];
    }
  }
};
</script>
