'use strict';

var _Alimento = require('./classes/Alimento.class');

var _Alimento2 = _interopRequireDefault(_Alimento);

var _Exception = require('./classes/Exception.class');

var _Exception2 = _interopRequireDefault(_Exception);

var _Exercicio = require('./classes/Exercicio.class');

var _Exercicio2 = _interopRequireDefault(_Exercicio);

var _Homem = require('./classes/Homem.class');

var _Homem2 = _interopRequireDefault(_Homem);

var _Mulher = require('./classes/Mulher.class');

var _Mulher2 = _interopRequireDefault(_Mulher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var laranja = new _Alimento2.default();
laranja.setNome("laranja");
laranja.setValorCalorico(60);
console.log(laranja.getNome());
console.log(laranja.getValorCalorico());

var homem = new _Homem2.default();
console.log(homem);

// // join atividades para completar 2 ou + em 1 exercicio (classe + localstorage +whatever)
// let bar = new MyModule();

// tryMe1(1); // ReferenceError: tryMe1 is not defined
// tryMe2; // ReferenceError: tryMe2 is not defined
// bar.tryMe1(1); // TypeError: bar.tryMe1 is not a function
// bar.tryMe2; // undefined

// bar.tryMe3(1); // 101
// bar.getTryMe1(1); // 3
// bar.getTryMe2(); // 1234
//# sourceMappingURL=index.js.map