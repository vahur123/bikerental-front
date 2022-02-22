import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import Renditingimused from "@/views/Renditingimused";
import Avaleht from "@/views/Avaleht";
import Meist from "@/views/Meist";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/avaleht',
    name: 'Avaleht',
    component: Avaleht
  },
  {
    path: '/renditingimused',
    name: 'Renditingimused',
    component: Renditingimused
  },
  {
    path: '/meist',
    name: 'Meist',
    component: Meist
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
