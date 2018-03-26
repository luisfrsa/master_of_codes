
var Alimento = require('./class/Alimento.class');
console.log(Alimento);
var alimento = new Alimento('Alimento Qualquer', 100);
console.log(alimento.toString());
console.log(alimento.getValorCalorico());

// var lima = new Fruta('Laranja lima', 50, "laranja");
// console.log(lima.toString());
// console.log(lima.getValorCalorico());

// var baiana = new Fruta('Laranja baiana', 80, "laranja");
// console.log(baiana.toString());
// console.log(baiana.getValorCalorico());

// var pizza = new Massa('Pizza', 3, 100);
// console.log(pizza.toString());
// console.log(pizza.getValorCalorico()); 