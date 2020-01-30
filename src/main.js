import Vue from 'vue'
//import VueHead from 'vue-head'; header要素
import App from './App.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import router from './router';
import 'firebase/analytics';

Vue.config.productionTip = false

const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
