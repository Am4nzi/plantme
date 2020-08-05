<template>
  <div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        Guide
        <v-icon class="mr-12">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <!--        Conditionally render different elements depending on current view-->
        <v-card-text>
          <h2 class="teal--text">
            {{ getGuideTitles }}
          </h2>
          <v-row class="justify-left">
            <v-col
              v-for="value in getGuideData"
              :key="value.id"
              class="infoCards"
              cols="10"
              xs="12"
              sm="4"
              md="4"
              lg="2"
              xl="2"
            >
              <v-card outlined>
                <v-card-title
                  style="font-family: sofia-pro, sans-serif !important"
                  class="text-h6 custom-font-sofia-pro"
                  v-text="value.cardtitle"
                ></v-card-title>
                <v-card-subtitle
                  style="font-family: sofia-pro, sans-serif !important"
                  class="text-subtitle-1 custom-font-sofia-pro"
                  v-text="value.guideinfo"
                ></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  name: "ExpansionPanel",
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters(["getMenuData"]),
    getGuideData() {
      if (this.getMenuIndex === 1) {
        return this.getMenuData.plantSize;
      } else {
        return this.getMenuData.lightLevel;
      }
    },
    getGuideTitles() {
      switch (this.getMenuIndex) {
        case 1:
          return this.$store.getters.getMenuData.guideTitles[0].guidetitle;
        case 2:
          return this.$store.getters.getMenuData.guideTitles[1].guidetitle;
        default:
          console.log('this.getMenuIndex: ', this.getMenuIndex);
          return "Error in getGuideTitles function";
      }
    }
  }
};
</script>

<style scoped>
h2 {
  margin-left: 40px;
  margin-bottom: 4px;
  margin-top: 16px;
}

.infoCards,
.infoParagraphs {
  margin-left: 40px;
}

@media (max-width: 600px) {
  h2 {
    margin-left: 18px;
  }

  .h2-no-cards {
    margin-left: 29px;
    margin-top: 32px;
  }

  .infoCards {
    margin-left: 18px;
  }

  .infoParagraphs {
    margin: 15px 0 30px 30px;
  }
}
</style>
