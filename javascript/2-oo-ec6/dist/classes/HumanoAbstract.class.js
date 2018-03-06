'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Exception = require('./Exception.class');

var _Exception2 = _interopRequireDefault(_Exception);

var _Homem = require('./Homem.class');

var _Homem2 = _interopRequireDefault(_Homem);

var _Mulher = require('./Mulher.class');

var _Mulher2 = _interopRequireDefault(_Mulher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _sexo;
var _nome;
var _gastoPorHora;
var _caloriasAcumuladas;

var HumanoAbstract = function () {
    function HumanoAbstract(nome, calorias) {
        _classCallCheck(this, HumanoAbstract);

        if (!_Exception2.default.checkClass(this, [_Homem2.default, _Mulher2.default])) {
            _nome = nome;
            _caloriasAcumuladas = calorias;
        }
    }

    _createClass(HumanoAbstract, [{
        key: 'getSexo',
        value: function getSexo() {
            return _sexo;
        }
    }, {
        key: 'setSexo',
        value: function setSexo(sexo) {
            _sexo = sexo;
        }
    }, {
        key: 'getNome',
        value: function getNome() {
            return _nome;
        }
    }, {
        key: 'setNome',
        value: function setNome(nome) {
            _nome = nome;
        }
    }, {
        key: 'getGastoPorHora',
        value: function getGastoPorHora() {
            return _gastoPorHora;
        }
    }, {
        key: 'setGastoPorHora',
        value: function setGastoPorHora(gastoPorHora) {
            _gastoPorHora = gastoPorHora;
        }
    }, {
        key: 'getCaloriasAcumuladas',
        value: function getCaloriasAcumuladas() {
            return _caloriasAcumuladas;
        }
    }, {
        key: 'setCaloriasAcumuladas',
        value: function setCaloriasAcumuladas(caloriasAcumuladas) {
            _caloriasAcumuladas = caloriasAcumuladas;
        }
    }, {
        key: 'comer',
        value: function comer(alimento) {
            var calorias = _comer(alimento);
            _caloriasAcumuladas += calorias;
        }
    }, {
        key: 'exercitar',
        value: function exercitar(exercicio, tempo) {
            if (!_Exception2.default.checkClass(exercicio, Exercicio)) {
                return false;
            }
            _caloriasAcumuladas -= exercicio.exercitar(_gastoPorHora, tempo);
            return true;
        }
    }]);

    return HumanoAbstract;
}();

exports.default = HumanoAbstract;


function _comer(alimento) {
    if (!_Exception2.default.checkClass(alimento, Alimento)) {
        return 0;
    }
    console.log("Comendo " + alimento.getNome());
    console.log("Ganhando " + alimento.getValorCalorico() + " calorias");
    return alimento.getValorCalorico();
}
//# sourceMappingURL=HumanoAbstract.class.js.map