<template>
  <v-app class="background">
    <v-main>
      <!--    <Card.vue />-->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style>
@media (min-width: 600px) {
  .background {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  .background:before {
    content: "";
    display: block;
    width: 905px;
    height: 0px;
    border-style: solid;
    border-width: 0px 0px 1033px 595px;
    border-color: transparent transparent #c4f5e1 transparent;
    position: absolute;
    right: 0px;
  }
}

@media (max-width: 600px) {
  .background {
    background-color: #c4f5e1 !important;
  }
}
</style>
