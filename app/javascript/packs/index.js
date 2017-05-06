import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: App }
    ],
});
document.body.appendChild(document.createElement('app'));
var app = new Vue({
    router: router,
    render: function (h) { return h(App); }
}).$mount('app');
