modules.define('service-list', ['i-bem__dom', 'ServiceList'], function (provide, BEMDOM, ServiceList) {
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
                return this.domElem.offset().top;
            }
        }));
});