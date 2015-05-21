modules.define('appStorage', function (provide) {
    provide({
        setData: function (key, value) {
            return this._data[key] = value;
        },

        getData: function (key) {
            return this._data[key] || null;
        },

        _data: {}
    });
});