import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import Renditingimused from "@/views/Renditingimused";
import Meist from "@/views/Meist";
import Admin from "@/views/Admin";
import Ostukorv from "@/views/Ostukorv";
import Rattad from "@/views/Rattad";
import Registeeru from "@/views/Registeeru";
import Kontakt from "@/views/Kontakt";

Vue.use(VueRouter)

const routes = [
  {
    path: '/bikes',
    name: 'RattadRoute',
    component: Rattad
  },
  {
    path: '/ostukorv',
    name: 'OstukorvRoute',
    component: Ostukorv
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/register',
    name: 'RegistreeruRoute',
    component: Registeeru
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
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
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
