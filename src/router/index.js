import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Card from '../components/Card';
import PlantSizeMenu from "../views/PlantSizeMenu";
import LightLevelMenu from "../views/LightLevelMenu";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        component: Card,
        children: [
          {
            path: "/",
            component: PlantSizeMenu
          },
          {
            path: "/lightlevel",
            component: LightLevelMenu
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "abstract",
  routes
});

export default router;
