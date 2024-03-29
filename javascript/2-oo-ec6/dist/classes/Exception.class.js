"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Exception = function () {
    function Exception() {
        _classCallCheck(this, Exception);
    }

    _createClass(Exception, null, [{
        key: "checkClass",
        value: function checkClass(current, expect) {
            var found = void 0,
                expectClassName = void 0,
                message = void 0;
            var currentClassName = current.constructor.name;
            if ((typeof expect === "undefined" ? "undefined" : _typeof(expect)) == 'object') {
                expectClassName = expect.reduce(_reduceClassNames, "");
                found = _checkClassArray(currentClassName, expect);
            } else {
                expectClassName = expect.constructor.name;
                found = _checkClassElem(currentClassName, expect);
            }
            if (!found) {
                message = _buildMessage(currentClassName, _reduceClassNames);
                this.throwError(message);
                return false;
            }
            return true;
        }
    }, {
        key: "throwError",
        value: function throwError(erro) {
            throw "Exception ao realizar operação: " + erro;
        }
    }]);

    return Exception;
}();

exports.default = Exception;

function _buildMessage(found, expected) {
    return "Nao foi possível instanciar esta Classe, Esperado: [" + expected + "], encontrado [" + found + "]";
}

function _checkClassArray(current, expecteds) {
    // let found = false;
    // expecteds.forEach(expClass => { if (_checkSomeClass(current, expClass.name)) { found = true;}});
    return expecteds.some(function (expClass) {
        return _checkSomeClass(current, expClass.name);
    });
    // return found;
}

function _checkClassElem(current, expect) {
    return _checkSomeClass(current, expect);
}

function _reduceClassNames(valorAnterior, valorAtual) {
    return valorAnterior + "|" + valorAtual.name;
}
function _checkSomeClass(current, expecteds) {
    return current == expecteds;
}
//# sourceMappingURL=Exception.class.js.map