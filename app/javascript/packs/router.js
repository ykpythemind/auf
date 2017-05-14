import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// ルーティング
const routes = [
  {
    path: '',
    component: resolve => require(['./views/home.vue'], resolve)
  },
  {
    path: '/upload',
    meta: {
      requiresAuth: true
    },
    component: resolve => require(['./views/upload.vue'], resolve)
  }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/app',
      alias: '/',
      component: resolve => require(['./App.vue'], resolve),
      children: routes
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

Vue.router = router;

export default router;
