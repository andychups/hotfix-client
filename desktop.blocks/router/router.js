modules.define('router', ['appStorage', 'Backbone'], function (provide, appStorage, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "services/:id": "getServiceList",
            "*actions":     "defaultRoute"
        }
    });

    function init () {
        var appRouter = new AppRouter;
        var serviceList = appStorage.getData('serviceList');

//        appRouter.on('route:defaultRoute', function (action) {
//            console.log('defaultRoute', actions);
//        });

        appRouter.on('route:getServiceList', function (action) {
            serviceList.forEach(function (model) {
                model.set('current', false, {'silent': true});
            });

            serviceList.findWhere({'type': action}).set('current', true);
        });

        return Backbone.history.start();
    }

    provide({
        init: init
    });
});