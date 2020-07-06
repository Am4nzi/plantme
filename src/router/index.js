import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Card from '../components/Card';
import Menu from "../views/Menu";
// import LightLevelMenu from "../views/LightLevelMenu";

Vue.use(VueRouter);

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
            redirect: '/plant-size',
          },
          {
            path: "/plant-size",
            name: 'PlantSizeMenu',
            component: Menu,
          },
          {
            path: "/light-level",
            name: 'LightLevelMenu',
            component: Menu
          },
          {
            path: "/ease-of-Care",
            name: 'EaseOfCareMenu',
            component: Menu
          },
          {
            path: "/pet-safe-menu",
            name: 'PetSafeMenu',
            component: Menu
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
