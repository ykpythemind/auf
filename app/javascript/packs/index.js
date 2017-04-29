import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.use(Router);

// TODO dotenv入れて環境分ける
// if(process.env.NODE_ENV !== 'production') {
//     Vue.config.devtools = true;
// }

const router = new Router({
    mode: 'history',
    routes
});

document.body.appendChild(document.createElement('app'));

const app = new Vue({
        router,
        render: h => h(App)
}).$mount('app');
