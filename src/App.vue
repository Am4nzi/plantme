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
      .catch(error => console.error(error));
    this.$store.dispatch('updateMenuHeadingText', this.menuHeadingText);
      this.$store.dispatch('updateStepperText', this.stepperText);
  },
  components: {
    Layout,
  },

  data: () => ({
    menuHeadingText: 'Select Size',
    stepperText: {
      step01: "Plant Size",
      step02: "Light Level",
      step03: "Ease of Care",
      step04: "Pet Safe?"
    }
  })
};
</script>
