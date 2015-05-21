modules.define('app', ['i-bem', 'appStorage', 'Backbone', 'router'], function (provide, BEM, appStorage, Backbone, router) {
    provide({
        init: function () {
            this._log({
                'router': router
            });

            router.init();
            //BEM.channel('bus').trigger('app:init');
        },

        setData: function (key, value) {
            return appStorage.setData(key, value);
        },

        getData: function (key) {
            return appStorage.getData(key);
        },

        _data: {},

        _VERBOSE: true,

        _log: function (components) {

            if (this._VERBOSE) {
                return false;
            }

            console.log('App start...');
            console.log('App/router', components.router);

            return true;
        }
    });
});