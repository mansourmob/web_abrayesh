import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Vuelidate from 'vuelidate';
import {Routes} from './Routes';
import {store} from './Store/Store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);

Vue.http.options.root = 'http://test.tickado.ir:8880/';

const router = new VueRouter({
  routes : Routes,
  mode:'history'

});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
