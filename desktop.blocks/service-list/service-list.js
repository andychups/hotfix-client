modules.define('service-list', ['i-bem__dom', 'app'], function (provide, BEMDOM, app) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        this.offsetTop = this.domElem.offset().top;
                        this.collection = app.getData('serviceList');
                        this.listeners();
                        this.render();
                    }
                }
            },

            listeners: function () {
                var _this = this;

                this.collection.on('change:current', function () {
                    _this.render();
                });
            },

            render: function () {
                var _this = this;

                this.collection.forEach(function (model) {
                    var bemElem = _this.findElem('item', 'type', model.get('type')).bem('service-list__item');

                    if (model.get('current')) {
                        bemElem.setMod('state', 'active');
                    } else {
                        bemElem.delMod('state');
                    }
                });
            },

            getOffsetTop: function () {
                return this.domElem.offset().top;
            }
        }));
});