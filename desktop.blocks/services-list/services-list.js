modules.define('services-list', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        this.offsetTop = this.domElem.offset().top;
                    }
                }
            },

            getOffsetTop: function () {
                return this.offsetTop;
            }
        },
        {
            /* статические методы */
        }));
});