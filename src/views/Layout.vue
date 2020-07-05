<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="10" lg="10">
            <v-card class="elevation-12">
              <!--START                V-STEPPER-->
              <Stepper :stepperText="stepperText"/>
              <!--END               V-STEPPER-->
              <v-card-text>
                <h1>Select Size</h1>
                <!--START                V-ITEM GROUP-->
                <v-item-group mandatory>
                  <v-container>
                    <v-row>
                      <v-col
                        v-for="n in menu.plantSizeData"
                        :key="n.id"
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
                            <v-img :src="n.image" height="200px"></v-img>
                            <v-card-title>
                              {{ n.plantsize }}
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
                <!--END                V-ITEM GROUP-->
              </v-card-text>
              <ExpandTransition :text="menu.expandInfo.plantSize"/>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import ExpandTransition from '../components/ExpandTransition';
import Stepper from "../components/Stepper"

export default {
  name: "Layout",
  components: {
    ExpandTransition,
    Stepper,
  },
  created() {
    fetch('http://localhost:3000/sizemenudata')
      .then(response => response.json())
      .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
        this.menu.plantSizeData = data;
        console.log('sizeMenuData: ', this.menu.plantSizeData[0].image);
      })
      .catch(error => console.error(error))
  },
  data: () => ({
    menu: {
      plantSizeData: [],
      expandInfo: {
        plantSize: 'Dummy Text'
      }
    },
    show: false,
    stepperText: {
      step01: 'Plant Size',
      step02: 'Light Level',
      step03: 'Ease of Care',
      step04: 'Pet Safe?'
    }
  })
};
</script>
