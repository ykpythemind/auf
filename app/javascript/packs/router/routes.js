const routes = [
    {
        path: '',
        component: resolve => require(['../views/Home/index.vue'], resolve)
    },
    {
        path: '/upload',
        meta: {
            requiresAuth: true
        },
        component: resolve => require(['../views/Upload/index.vue'], resolve)
    }
];

export default routes
