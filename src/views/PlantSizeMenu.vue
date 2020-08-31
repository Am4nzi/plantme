<template>
  <!--    v-item-group component documentation: https://vuetifyjs.com/en/components/item-groups//-->
  <v-item-group
    v-model="plantSizeMenuSelection"
    :mandatory="mandatory"
  >
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
      <v-row
        class="justify-xl-center
        justify-lg-center
        justify-md-start
        justify-sm-start
        justify-xs-start"
        dense
      >
        <v-col
          v-for="item in getMenuData.plantSize"
          :key="item.id"
          :class="{ active: item === activeItem }"
          cols="6"
          xs="10"
          sm="4"
          md="4"
          lg="3"
          xl="3"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              outlined
              class="mx-auto"
              max-width="300"
              @click="
                toggle();
                handleMenuUserSelections(
                  item,
                  'setPlantSizeMenuUserSelectionTitles'
                );
              "
            >
              <v-img :src="item.image" class="card-image"></v-img>

              <v-card-title class="card-title">
                {{ item.cardtitle }}
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      class="ml-1 mt-1 mr-0 close-button d-none d-sm-flex"
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
export default {
  name: "PlantSizeMenu",
  data: () => ({
    mandatory: false,
    activeItem: null,
    menu: {
      plantSizeData: [],
      previousSelection: ""
    }
  }),
  computed: {
    ...mapGetters(["getModalClosedOnce"]),
    ...mapGetters(["getUserSelections"]),
    plantSizeMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.plantSizeMenu;
      },
      set(value) {
        this.$store.commit("setPlantSizeMenuUserSelectionIndexes", value);
      }
    },
    getMenuData() {
      return this.$store.getters.getMenuData;
    }
  },
};
</script>
