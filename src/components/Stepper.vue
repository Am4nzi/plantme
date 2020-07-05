<template>
  <v-stepper
    class="blue-grey elevation-0 rounded-tl-sm rounded-t4-sm rounded-bl-0 rounded-br-0 lighten-5"
  >
    <v-stepper-header>
      <v-stepper-step complete editable step="1">
        {{ stepperText.step01 }}
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step complete editable step="2">
        {{ stepperText.step02 }}
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step complete editable step="3">
        {{ stepperText.step03 }}
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step complete editable step="3">
        {{ stepperText.step04 }}
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  name: "Stepper",
  computed: {
    stepperText() {
      return this.$store.state.stepperText;
    }
  }
};
</script>
