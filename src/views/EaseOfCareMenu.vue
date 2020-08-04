<template>
  <!--    v-item-group component documentation: https://vuetifyjs.com/en/components/item-groups//-->
  <v-item-group v-model="selected" :mandatory="mandatory">
    <v-container>
      <v-row class="justify-space-around mt-8 mb-8">
        <Heading />
      </v-row>
      <v-row
        class="justify-xl-space-around justify-lg-space-between justify-md-start justify-sm-start justify-xs-start ml-xl-16 mr-xl-16"
      >
        <v-col
          v-for="item in this.menu.easeOfCareData"
          :key="item.id"
          :class="{ active: item === activeItem }"
          cols="6"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'teal' : ''"
              outlined
              class="mx-auto"
              max-width="375"
              @click="
                toggle();
                selectItem(item, 'setEaseOfCareMenuSelection');
              "
            >
              <v-img :src="item.image" class="card-image"></v-img>
              <v-card-title
                :class="active ? 'white--text' : ''"
                style="word-break: keep-all;"
              >
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
