var Router = (function () {
    function Router() {
    }
    Object.defineProperty(Router, "map", {
        get: function () {
            return {
                '/': {
                    component: '<h1>Hello World!!!</h1>'
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Router;
}());
export default Router;
