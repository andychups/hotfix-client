modules.define('app', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        console.log('App start');
                    }
                }
            }
        },
        {
            /* статические методы */
        }));
});