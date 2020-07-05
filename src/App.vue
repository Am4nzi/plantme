<template>
  <v-app>
    <Layout />
  </v-app>
</template>

<script>
  import Layout from "./views/Layout"

export default {
  name: "App",
  created() {
    fetch('http://localhost:3000/sizemenudata')
      .then(response => response.json())
      .then(data => {
        this.$store.dispatch('updatePlantSizeMenu', data);
      })
      .catch(error => console.error(error))
  },
  components: {
    Layout,
  },

  data: () => ({
    //
  })
};
</script>
