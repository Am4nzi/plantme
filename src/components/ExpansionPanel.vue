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
        <v-card-text
          v-if="
            getGuideText.heading === 'Size Guide' ||
              getGuideText.heading === 'Light Level Guide'
          "
        >
          <h2 class="teal--text">
            {{ getGuideText.heading }}
          </h2>
          <v-row class="justify-left">
            <v-col
              v-for="(value, key) in getGuideText.guide"
              :key="value"
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
                  v-text="key"
                ></v-card-title>
                <v-card-subtitle
                  style="font-family: sofia-pro, sans-serif !important"
                  class="text-subtitle-1 custom-font-sofia-pro"
                  v-text="value"
                ></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <div
          v-else-if="
            getGuideText.heading === 'Ease of Care Guide' ||
              getGuideText.heading === 'Pet Safety Guide'
          "
        >
          <h2 class="teal--text h2-no-cards">
            {{ getGuideText.heading }}
          </h2>
          <p
            class="infoParagraphs"
            style="max-width: 75%; text-align: justify; text-justify: inter-word;"
          >
            {{ getGuideText.guide }}
          </p>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "ExpansionPanel",
  data: () => ({
    show: false
  }),
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
