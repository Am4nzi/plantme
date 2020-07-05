<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn icon @click="show = !show">
      <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: "CardActions",
  data: () => ({
    show: false
  })
};
</script>
