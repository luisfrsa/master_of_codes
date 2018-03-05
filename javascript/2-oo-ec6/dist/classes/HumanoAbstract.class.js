"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _sexo;
var _nome;
var _gastoPorHora;
var _caloriasAcumuladas;

var HumanoAbstract = exports.HumanoAbstract = function () {
    function HumanoAbstract() {
        _classCallCheck(this, HumanoAbstract);

        return !Exception.checkClass(this, [Homem, Mulher]);
    }

    _createClass(HumanoAbstract, [{
        key: "getSexo",
        value: function getSexo() {
            return _sexo;
        }
    }, {
        key: "setSexo",
        value: function setSexo(sexo) {
            _sexo = sexo;
        }
    }, {
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
        key: "getGastoPorHora",
        value: function getGastoPorHora() {
            return _gastoPorHora;
        }
    }, {
        key: "setGastoPorHora",
        value: function setGastoPorHora(gastoPorHora) {
            _gastoPorHora = gastoPorHora;
        }
    }, {
        key: "getCaloriasAcumuladas",
        value: function getCaloriasAcumuladas() {
            return _caloriasAcumuladas;
        }
    }, {
        key: "setCaloriasAcumuladas",
        value: function setCaloriasAcumuladas(caloriasAcumuladas) {
            _caloriasAcumuladas = caloriasAcumuladas;
        }
    }, {
        key: "comer",
        value: function comer(alimento) {
            var calorias = _comer(alimento);
            _caloriasAcumuladas += calorias;
        }
    }, {
        key: "exercitar",
        value: function exercitar(exercicio, tempo) {
            if (!Exception.checkClass(exercicio, Exercicio)) {
                return false;
            }
            _caloriasAcumuladas -= exercicio.exercitar(_gastoPorHora, tempo);
            return true;
        }
    }]);

    return HumanoAbstract;
}();

function _comer(alimento) {
    if (!Exception.checkClass(alimento, Alimento)) {
        return 0;
    }
    console.log("Comendo " + alimento.getNome());
    console.log("Ganhando " + alimento.getValorCalorico() + " calorias");
    return alimento.getValorCalorico();
}
//# sourceMappingURL=HumanoAbstract.class.js.map