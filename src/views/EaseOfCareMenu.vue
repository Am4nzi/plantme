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
      <v-row class="justify-space-around mb-4">
        <Heading />
      </v-row>
      <v-row
        class="justify-xl-center
        justify-lg-center
        justify-md-center
        justify-sm-center
        justify-xs-start"
        dense
      >
        <v-col
          v-for="item in this.menu.easeOfCareData"
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
              :color="active ? '#fcc7b8' : ''"
              outlined
              class="mx-auto"
              max-width="300"
              @click="
                toggle();
                selectItem(item, 'setEaseOfCareMenuSelection');
              "
            >
              <v-img :src="item.image" class="card-image"></v-img>
              <v-card-title style="word-break: keep-all;">
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
import Heading from "../components/Heading";
export default {
  name: "EaseOfCareMenu",
  components: {
    Heading
  },
  data: () => ({
    mandatory: false,
    selected: null,
    activeItem: null,
    menu: {
      easeOfCareData: []
    }
  }),
  computed: {
    ...mapGetters(["getMenuData"]),
    ...mapGetters(["getPreviousMenuSelection"])
  },
  mounted() {
    this.menu.easeOfCareData = this.getMenuData.easeOfCare;
    //Previous selection remains active if user navigates to a view they've already visited
    if (this.getPreviousMenuSelection.easeOfCare) {
      this.selected = this.getPreviousMenuSelection.easeOfCare[1];
    }
  }
};
</script>
