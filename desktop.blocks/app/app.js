modules.define('app', ['i-bem__dom', 'Backbone', 'router'], function (provide, BEMDOM, Backbone, router) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        this.__self.log({
                            'router': router
                        })
                    }
                }
            }
        },
        {
            VERBOSE: true,

            log: function (components) {
                console.log('App start...');
                console.log('App/router', components.router);
            }
        }));
});