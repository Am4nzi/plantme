<template>
  <!--    v-item-group component documentation: https://vuetifyjs.com/en/components/item-groups//-->
  <v-item-group v-model="selected" :mandatory="mandatory">
    <v-container>
      <v-row class="justify-space-around mt-8 mb-8">
        <Heading />
      </v-row>
      <v-row class="justify-center ml-xl-16 mr-xl-16">
        <v-col
          v-for="item in petSafeMenuData"
          :key="item.id"
          :class="{ active: item === activeItem }"
          cols="12"
          xs="12"
          sm="12"
          md="4"
          lg="4"
          xl="4"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'teal' : ''"
              outlined
              class="mx-auto"
              max-width="350"
              @click="
                toggle();
                selectItem(item);
              "
            >
              <v-img :src="item.image" height="200px"></v-img>
              <v-card-title :class="active ? 'white--text' : ''">
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
import Heading from "../components/Heading";
export default {
  name: "PetSafeMenu",
  components: {
    Heading
  },
  data: () => ({
    mandatory: false,
    selected: null,
    activeItem: null,
    menu: {
      plantSizeData: []
    }
  }),
  computed: {
    petSafeMenuData() {
      return this.$store.state.menus.petSafe;
    },
    getPreviousSelection() {
      return this.$store.state.menuSelections.menuSelection.petSafe;
    },
    getExpansionPanelText() {
      return this.$store.state.menuSelections.expansionPanelText;
    }
  },
  mounted() {
    //Previous selection remains active if user navigates to a view they've already visited
    if (this.getPreviousSelection) {
      this.selected = this.getPreviousSelection[1];
    }
  },
  methods: {
    //Handle card selection and storing value in state
    selectItem(card) {
      this.activeItem = card;
      this.mandatory = true;
      this.$store.commit("setPetSafeMenuSelection", [
        card.cardtitle,
        this.selected
      ]);
    }
  }
};
</script>
