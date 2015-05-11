modules.define('logo', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name,
        {
            MAX_OFFSET: null,

            onSetMod: {
                'js': {
                    'inited': function () {
                        var block = this;
                        var $window = $(window);
                        var $htmlAndBody = $('html, body');

                        this.calcOffset();

                        $window.on('scroll', function () {
                            block.checkSize($(this).scrollTop());
                        });

                        this.bindTo('click', function (e) {
                            $htmlAndBody.animate({'scrollTop': 0}, 500);

                            e.preventDefault();
                        });

                        this.checkSize($window.scrollTop());
                    }
                }
            },

            checkSize: function (offsetTop) {
                offsetTop = offsetTop || 0;
                var maxOffset = this.MAX_OFFSET || 200;

                if (offsetTop >= maxOffset) {
                    this.setMod('size', 'small');
                } else {
                    this.delMod('size');
                }
            },

            calcOffset: function () {
                this.MAX_OFFSET = this.findBlockOutside('app').findBlockInside('services-list').getOffsetTop();
            }
        }));
});