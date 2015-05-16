modules.define('app', ['i-bem__dom', 'Backbone', 'router'], function (provide, BEMDOM, Backbone, router) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        this.__self._log({
                            'router': router
                        })
                    }
                }
            }
        },
        {
            _VERBOSE: true,

            _log: function (components) {

                if (this._VERBOSE) {
                    return false;
                }

                console.log('App start...');
                console.log('App/router', components.router);

                return true;
            }
        }));
});