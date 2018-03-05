"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _nome = void 0;
var _valorCalorico = void 0;

var Alimento = function () {
    function Alimento() {
        _classCallCheck(this, Alimento);
    }

    _createClass(Alimento, [{
        key: "getNome",
        value: function getNome() {
            return _nome;
        }
    }, {
        key: "setNome",
        value: function setNome(nome) {
            _nome = nome;
        }
    }, {
        key: "getValorCalorico",
        value: function getValorCalorico() {
            return _valorCalorico;
        }
    }, {
        key: "setValorCalorico",
        value: function setValorCalorico(valorCalorico) {
            _valorCalorico = valorCalorico;
        }
    }]);

    return Alimento;
}();

exports.default = Alimento;
//# sourceMappingURL=Alimento.class.js.map