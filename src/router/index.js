import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Layout from "../views/Layout.vue";
import Card from "../components/Card";
import PlantSizeMenu from "../views/PlantSizeMenu";
import LightLevelMenu from "../views/LightLevelMenu";
import EaseOfCareMenu from "../views/EaseOfCareMenu";
import PetSafeMenu from "../views/PetSafeMenu";
require('dotenv').config();

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Card,
        children: [
          {
            path: "/",
            redirect: "/plant-size"
          },
          {
            path: "/plant-size",
            name: "PlantSizeMenu",
            component: PlantSizeMenu
          },
          {
            path: "/light-level",
            name: "LightLevelMenu",
            component: LightLevelMenu
          },
          {
            path: "/ease-of-Care",
            name: "EaseOfCareMenu",
            component: EaseOfCareMenu
          },
          {
            path: "/pet-safe-menu",
            name: "PetSafeMenu",
            component: PetSafeMenu
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
