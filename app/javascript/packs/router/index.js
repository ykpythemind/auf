import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/app',
      alias: '/',
      component: resolve => require(['../App.vue'], resolve),
      children: routes
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
//
// router.beforeEach((to, from, next) => {
//     if (!to.meta.requiresAuth) return next()
//     if (!localStorage.token) {
//         return next({
//             path: '/login',
//             query: { redirect: to.fullPath }
//         })
//     }
//
//     Vue.http.get('/users/me')
//         .then((response) => {
//             next(vm => {
//                 vm.user = response.body
//             })
//         })
//         .catch((response) => {
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             })
//         })
// })

Vue.router = router;

export default router;
