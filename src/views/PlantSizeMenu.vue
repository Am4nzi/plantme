<template>
  <v-container>
    <Heading />
    <v-row>
      <v-col
        v-for="item in menu.plantSizeData"
        :key="item.id"
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
            @click="toggle"
          >
            <v-img :src="item.image" height="200px"></v-img>
            <v-card-title>
              {{ item.plantsize }}
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
    menu: {
      plantSizeData: [],
      expandInfo: {
        plantSize: "Dummy Text"
      }
    }
  }),
  created() {
    fetch("http://localhost:3000/sizemenudata")
      .then(response => response.json())
      .then(data => {
        this.menu.plantSizeData = data;
      })
      .catch(error => console.error(error));
  }
};
</script>
