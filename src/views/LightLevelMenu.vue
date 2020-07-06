<template>
  <v-container>
    <Heading />
    <v-row class="justify-space-around">
      <v-col
        v-for="item in lightLevelData"
        :key="item.id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="2"
        xl="2"
        class="d-flex justify-sm-space-between"
      >
        <v-item v-slot:default="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : ''"
            class="mx-auto"
            max-width="200"
            @click="toggle"
          >
            <v-img :src="item.image" height="200px"></v-img>
            <v-card-title>
              {{ item.lightlevel }}
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
  name: "plantSize",
  components: {
    Heading
  },
  data: () => ({
    headingText: "Select Size",
    menu: {
      plantSizeData: [],
      expandInfo: {
        plantSize: "Dummy Text"
      }
    }
  }),
  computed: {
    lightLevelData() {
      console.log('this.$store.state.lightLevel: ', this.$store.state.menus.lightLevel);
      return this.$store.state.menus.lightLevel;
    }
  }
};
</script>
