<template>
  <!--    v-item-group component documentation: https://vuetifyjs.com/en/components/item-groups//-->
  <v-item-group v-model="petSafeMenuSelection" :mandatory="mandatory">
    <v-container
      fluid
      fill-height
      class="pl-xl-16
            pr-xl-16
            pb-xl-7
            pb-lg-7
            pl-lg-16
            pr-lg-16"
    >
      <v-row class="justify-space-around mb-4">
      </v-row>
      <v-row
        class="justify-xl-center
        justify-lg-center
        justify-md-center
        justify-sm-center
        justify-xs-start
        ml-lg-16 mr-lg-16
        ml-xl-16 mr-xl-16"
        dense
      >
        <v-col
          v-for="item in menu.petSafeData"
          :key="item.id"
          :class="{ active: item === activeItem }"
          cols="6"
          xs="6"
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
                  'setPetSafeMenuUserSelectionTitles'
                );
              "
            >
              <v-img :src="item.image" class="card-image"></v-img>
              <v-card-title class="card-title" style="word-break: keep-all;">
                {{ item.cardtitle }}
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
  name: "PetSafeMenu",
  data: () => ({
    mandatory: false,
    activeItem: null,
    menu: {
      petSafeData: []
    }
  }),
  computed: {
    ...mapGetters(["getMenuData"]),
    ...mapGetters(["getUserSelections"]),
    ...mapGetters(["getModalClosedOnce"]),
    petSafeMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.petSafeMenu;
      },
      set(value) {
        this.$store.commit("setPetSafeUserSelectionIndexes", value);
      }
    }
  },
  mounted() {
    this.menu.petSafeData = this.getMenuData.petSafe;
  }
};
</script>
