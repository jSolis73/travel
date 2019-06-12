import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'



Vue.use(Vuetify)


const config = {  
  apiKey: "AIzaSyBWJLoTG16TYZ0H-vXpMIMgamJ-HNW6Fbg",
  authDomain: "travel-b8c69.firebaseapp.com",
  databaseURL: "https://travel-b8c69.firebaseio.com",
  projectId: "travel-b8c69",
  storageBucket: "travel-b8c69.appspot.com",
  messagingSenderId: "78544086459",
  appId: "1:78544086459:web:6511f9e2a4c61474"
}
const fb = firebase.initializeApp(config)
const db = firebase.firestore()

export {fb, db}

new Vue({
  render: h => h(App),
}).$mount('#app')
