<template>
  <!--    v-item-group component documentation: https://vuetifyjs.com/en/components/item-groups//-->
  <v-item-group
    v-model="easeOfCareMenuSelection"
    :mandatory="mandatory"
    :multiple="multiple"
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
      <v-row class="justify-space-around mb-4">
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
              :color="active ? 'primary' : ''"
              outlined
              class="mx-auto"
              max-width="300"
              @click="
                toggle();
                handleMenuUserSelections(
                  item,
                  'setEaseOfCareMenuUserSelectionTitles'
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
  name: "EaseOfCareMenu",
  data: () => ({
    mandatory: false,
    multiple: true,
    activeItem: null,
    menu: {
      easeOfCareData: []
    }
  }),
  computed: {
    ...mapGetters(["getMenuData"]),
    ...mapGetters(["getUserSelections"]),
    ...mapGetters(["getModalClosedOnce"]),
    easeOfCareMenuSelection: {
      get() {
        return this.$store.state.userSelections.indexes.easeOfCareMenu;
      },
      set(value) {
        this.$store.commit("setEaseOfCareUserSelectionIndexes", value);
      }
    }
  },
  watch: {
    multiple(val) {
      this.easeOfCareMenuSelection = val
        ? this.easeOfCareMenuSelection >= 0
          ? [this.easeOfCareMenuSelection]
          : []
        : this.easeOfCareMenuSelection.pop();
    }
  },
  mounted() {
    this.menu.easeOfCareData = this.getMenuData.easeOfCare;
  }
};
</script>
