import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Card from "../components/Card";
import PlantSizeMenu from "../views/PlantSizeMenu";
import LightLevelMenu from "../views/LightLevelMenu";
import EaseOfCareMenu from "../views/EaseOfCareMenu";
import PetSafeMenu from "../views/PetSafeMenu";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
        children: [
          {
            path: "/",
            component: Card,
            children: [
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
      },
      {
        path: "/home",
        name: "Home",
        component: Home
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
