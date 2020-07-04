<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="10" lg="10">
            <v-card class="elevation-12">
              <!--START                V-STEPPER-->
              <v-stepper
                class="blue-grey elevation-0 rounded-tl-sm rounded-t4-sm rounded-bl-0 rounded-br-0 lighten-5"
              >
                <v-stepper-header>
                  <v-stepper-step complete editable step="1">
                    Select campaign settings
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step complete step="2"
                    >Create an ad group</v-stepper-step
                  >
                  <v-divider></v-divider>
                  <v-stepper-step step="3" editable>
                    Create an ad
                  </v-stepper-step>
                </v-stepper-header>
              </v-stepper>
              <!--END               V-STEPPER-->
              <v-card-text>
                <h1>Select Size</h1>
                <!--START                V-ITEM GROUP-->
                <v-item-group mandatory>
                  <v-container>
                    <v-row>
                      <v-col
                        v-for="n in 6"
                        :key="n"
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
                            <v-img
                              src="https://source.unsplash.com/random/600x800"
                              height="200px"
                            ></v-img>
                            <v-card-title>
                              Size
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
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    fetch('http://localhost:3000/plantsdata')
      .then(response => response.json())
      .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
      })
      .catch(error => console.error(error))
  },
  data: () => ({
    show: false
  })
};
</script>
