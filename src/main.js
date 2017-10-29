// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import firebase from 'firebase'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGnUXjCum8WeNH1Guom7EvEzFCNwoHAeE",
    authDomain: "simoncapstone1150.firebaseapp.com",
    databaseURL: "https://simoncapstone1150.firebaseio.com",
    projectId: "simoncapstone1150",
    storageBucket: "simoncapstone1150.appspot.com",
    messagingSenderId: "337634294014"
  };

  firebase.initializeApp(config);

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
