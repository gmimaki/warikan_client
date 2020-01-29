import Vue from 'vue'
//import VueHead from 'vue-head'; header要素
import App from './App.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import router from './router';

Vue.config.productionTip = false

firebaseConfig = {
  apiKey: "***********",
  authDomain: "***********:",
  databaseURL: "***********",
  projectId: "**************",
  storageBucket: "**********",
  messagingSenderId: "***********:"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
