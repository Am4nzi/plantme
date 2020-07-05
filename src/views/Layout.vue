<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="10" lg="10">
            <router-view />
            <v-row align="center" justify="end">
              <div>
                <v-btn @click="nextView" x-large color="success" dark
                  >Extra large Button</v-btn
                >
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Layout",
  methods: {
    nextView() {
      this.$store.dispatch('updateMenuHeadingText', 'Select Light Level');
      this.$router.push("/lightlevel");
    }
  },
  components: {}
};
</script>
