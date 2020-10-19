import Vue from 'vue'
//import VueHead from 'vue-head'; header要素
import App from './App.vue'
import router from './router';
import 'firebase/analytics';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
