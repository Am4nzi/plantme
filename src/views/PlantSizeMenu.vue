<template>
  <v-container>
    <Heading />
    <v-row class="justify-space-around">
      <v-col
        v-for="item in plantSizeMenuData"
        :key="item.id"
        :class="{ active: item === activeItem}"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="2"
        xl="2"
      >
        <v-item v-slot:default="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : ''"
            class="mx-auto"
            max-width="300"
            @click="toggle(); selectItem(item);"
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
</template>

<script>
import Heading from "../components/Heading";
export default {
  name: "PlantSizeMenu",
  components: {
    Heading
  },
  data: () => ({
    activeItem: null,
    menu: {
      plantSizeData: [],
      expandInfo: {
        plantSize: "Dummy Text"
      }
    },
    titles: false
  }),
  computed: {
    plantSizeMenuData() {
      return this.$store.state.menus.plantSize;
    },
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
      this.$store.dispatch("updatePlantSizeMenuSelection", this.activeItem.cardtitle);
    },
  }
};
</script>
