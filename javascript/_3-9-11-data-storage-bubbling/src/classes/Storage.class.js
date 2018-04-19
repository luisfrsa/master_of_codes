var Storage = function () {
    if (typeof (Storage) !== "undefined") {
        return StorageClass();
    } else {
        alert("Storage não suportado");
        return {
            set: function (data) { },
            get: function () { return []; },
            clear: function () { },
        }
    }
}
var StorageClass = function () {
    var set = function (data) {
        var dataStore;
        if (data) {
            dataStore = JSON.stringify(data);
        }
        localStorage.setItem("myStore", dataStore);
    };
    var get = function () {
        var parse, retorno = localStorage.getItem("myStore");
        if (retorno) {
            parse = JSON.parse(retorno);
        }
        return (parse || {});
    };
    var clear = function () {
        localStorage.setItem("myStore", '');
    }
    return {
        set: set,
        get: get,
        clear: clear,
    }
}