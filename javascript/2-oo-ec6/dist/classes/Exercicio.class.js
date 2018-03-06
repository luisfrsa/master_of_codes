"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _caloriasPorHora;

var Exericio = exports.Exericio = function () {
    function Exericio(caloriasPorHora) {
        _classCallCheck(this, Exericio);

        _caloriasPorHora = caloriasPorHora;
    }

    _createClass(Exericio, [{
        key: "getCaloriasPorHora",
        value: function getCaloriasPorHora() {
            return _caloriasPorHora;
        }
    }, {
        key: "setCaloriasPorHora",
        value: function setCaloriasPorHora(caloriasPorHora) {
            _caloriasPorHora = caloriasPorHora;
        }
    }, {
        key: "exercitar",
        value: function exercitar(gastoPorHoraHumano, quantidadeHoras) {
            return (gastoPorHoraHumano + _caloriasPorHora) * quantidadeHoras;
        }
    }]);

    return Exericio;
}();
//# sourceMappingURL=Exercicio.class.js.map