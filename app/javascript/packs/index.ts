// import _Vue = require("vue");
// import Vue from "vue";
// import Router from 'vue-router';
//
// import App from './App';
// import routes from './routes';
//
//
// // augment typings of Vue.js
// // import "./App";
//
// Vue.;
//
// // TODO dotenv入れて環境分ける
// // if(process.env.NODE_ENV !== 'production') {
// //     Vue.config.devtools = true;
// // }
//
// const router = new Router({
//     mode: 'history',
//     routes
// });
//
// document.body.appendChild(document.createElement('app'));
//
// const app = new _Vue({
//     router,
//     render: h => h(App)
// }).$mount('app');


import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Router from './routes'
import App from './App'

/*
 For components that will be used in html (such as navbar),
 all you need to do is import the file somewhere in your code,
 they are automatically registered when the file is loaded.
 However, if you import the class (ex: import { Navbar } from './navbar'),
 you will have to call new Navbar() somewhere as well. You would want
 to do that if you are defining a components{} object in the @VueComponent
 options parameter.
 */
// import './components/navbar/navbar'
// import './components/panel'

Vue.use(VueRouter);
Vue.use(VueResource);
/*
var app = Vue.extend({
    Store
});*/


// var router = new VueRouter();
// router.map(Router.map);
//
// router.start(app, '#app');
//
// var router = new VueRouter();
// router.mode = 'history';
// router.app = App;
//
// router.start(app, '#app');

// var router = new VueRouter({
//     mode: 'history',
//     currentRoute:
// })
// // mount
// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App, {
//         props: { propMessage: 'World' }
//     })
// })

let router: any = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: App }
    ],
});

// // $(function() {
// router.start(App, '#app');
// // });

document.body.appendChild(document.createElement('app'));

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('app');
