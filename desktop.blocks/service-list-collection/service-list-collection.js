modules.define('ServiceList', ['Backbone', 'ServiceListItem'], function(provide, Backbone, ServiceListItem) {
    var ServiceList = Backbone.Collection.extend({
        model: ServiceListItem
    });

    provide(ServiceList);
});