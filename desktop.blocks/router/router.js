modules.define('router', ['Backbone'], function (provide, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "services/:id": "getServiceList",
            "*actions":     "defaultRoute"
        }
    });

    var appRouter = new AppRouter;

    appRouter.on('route:defaultRoute', function (actions) {
        console.log('defaultRoute', actions);
    });

    appRouter.on('route:getServiceList', function (actions) {
        console.log('getServiceList', actions);
    });

    Backbone.history.start();

    provide(appRouter);
});