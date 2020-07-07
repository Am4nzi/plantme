<template>
  <v-item-group v-model="selected" :mandatory="mandatory">
    <v-container>
      <Heading />
      <v-row class="justify-space-around">
        <v-col
          v-for="item in petSafeMenuData"
          :key="item.id"
          class="{ active: item === activeItem }"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          xl="2"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="mx-auto"
              max-width="300"
              @click="
                toggle();
                selectItem(item);
              "
            >
              <v-img :src="item.image" height="200px"></v-img>
              <v-card-title>
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
      plantSizeData: [],
      expandInfo: {
        plantSize: "Dummy Text"
      }
    },
  }),
  computed: {
    petSafeMenuData() {
      return this.$store.state.menus.petSafe;
    },
    getPreviousSelection() {
      return this.$store.state.menuSelection.petSafe;
    }
  },
  mounted() {
    if (this.getPreviousSelection) {
      this.selected = this.getPreviousSelection[1];
    }
  },
  methods: {
    selectItem(card) {
      this.activeItem = card;
      console.log(this.selected);
      this.$store.dispatch("updatePetSafeMenuSelection", [
        card.cardtitle,
        this.selected
      ]);
    }
  }
};
</script>
