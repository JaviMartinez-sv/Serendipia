import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";
import Login2 from "../views/Login2.vue";
import SignUp from "../views/Signup.vue";
import Profile from "../views/Profile.vue";
import {fb} from "../firebase";

Vue.use(Router); // VueRouter

// const router = [
  const router = new Router({
      mode: "history",
      base: process.env.BASE_URL,
      routes: [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta:{requiresAuth:true},
    children:[
      {
        path: "overview",
        name: "overview",
        component: Overview
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "products",
        name: "products",
        component: Products
      },
      {
        path: "orders",
        name: "orders",
        component: Orders
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login2,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/products",
    name: "products",
    component:()=>
    import (/* webpackChunkName: "about" */ "../sections/Products.vue"),
  }
]
});

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;

