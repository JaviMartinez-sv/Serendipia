import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import jQuery from "jquery";
import {fb} from "./firebase";

window.$ = window.jQuery = jQuery;

import "popper.js";
import "./assets/app.scss";
import "bootstrap";

Vue.component("Navbar", require("./components/Navbar.vue").default);

Vue.config.productionTip = false;


let app = '';

fb.auth().onAuthStateChanged(function(user) {
  console.log(user)
  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
    
  }

});

/* eslint-disable */