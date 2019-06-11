import Vue from 'vue'
import store from './store'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBWJLoTG16TYZ0H-vXpMIMgamJ-HNW6Fbg",
  authDomain: "travel-b8c69.firebaseapp.com",
  databaseURL: "https://travel-b8c69.firebaseio.com",
  projectId: "travel-b8c69",
  storageBucket: "travel-b8c69.appspot.com",
  messagingSenderId: "78544086459",
  appId: "1:78544086459:web:6511f9e2a4c61474"
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
