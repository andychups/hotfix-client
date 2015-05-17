modules.define('logo', ['i-bem__dom', 'app'], function (provide, BEMDOM, app) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {

                    }
                }
            }
        }));
});