modules.define('page', ['i-bem__dom'], function(provide, BEMDOM){
  console.log(000);
    provide(BEMDOM.decl('page',
    {
        onSetMod: {
            'js': {
                'inited': function () {
                    console.log(123);
                    console.log(this.domElem[0].outerHTML);
                }
            }
        }
    },
    {
        /* статические методы */
    }));
});