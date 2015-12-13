import { setupRouter } from './app-router';
import $ from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
   history: true,
   saveScrollPosition: true,
   hashbang: false
});

setupRouter(router);

const App = Vue.extend(require('../dist/components/app.vue'));

$(function() {
  router.start(App, '#app');

});
