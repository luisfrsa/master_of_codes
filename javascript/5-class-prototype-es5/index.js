
//Definindo classes
/**
 * Alimento class.
 * @constructor
 * @param {String} nome    
 * @param {Integer} calorias - calorias por grama
 */

var Alimento = function (nome, calorias) {
    this.nome = nome;
    this.setValorCalorico(calorias);
}

Alimento.prototype.setValorCalorico = function (calorias) {
    this.calorias = calorias;
    this.joules = (calorias * 4.184).toFixed(2);
}

Alimento.prototype.getValorCalorico = function () {
    return { calorias: this.calorias, joules: this.joules }
}

Alimento.prototype.toString = function () {
    return 'Alimento-> ' + this.nome + " Calorias: " + this.calorias;
};

/**
 * Fruta class.
 * 
 * @constructor
 * @param {String} nome    
 * @param {Integer} calorias - calorias por grama
 * @param {Integer} tipo - tipo de fruta
 */
var Fruta = function (nome, calorias, tipo) {
    Alimento.call(this, nome, calorias);
    this.tipo = tipo;
}
Fruta.prototype = Object.create(Alimento.prototype);
Fruta.prototype.constructor = Fruta;
Fruta.prototype.toString = function () {
    return 'Fruta-> ' + this.nome + " Calorias: " + this.calorias + " Tipo: " + this.tipo;
};

/**
 * Massa class.
 * 
 * @constructor
 * @param {String} nome    
 * @param {Integer} calorias - calorias por grama
 * @param {Integer} quantidade - peso
 */

var Massa = function (nome, calorias, peso) {
    this.peso = peso;
    Alimento.call(this, nome, calorias);
}
Massa.prototype = Object.create(Alimento.prototype);
Massa.prototype.constructor = Massa;
Massa.prototype.toString = function () {
    return 'Massa-> ' + this.nome + " Calorias: " + this.calorias + " Joules: " + this.joules + " Peso: " + this.peso;
};
Massa.prototype.setValorCalorico = function (calorias) {
    this.calorias = calorias * this.peso;
    this.joules = (calorias * 4.184 * this.peso).toFixed(2);
}

/***************** FIM DE DEFINIÇÃO DE CLASES********************** */
console.log('.::Iniciando Aplicação::.');

var alimento = new Alimento('Alimento Qualquer', 100);
console.log(alimento.toString());
console.log(alimento.getValorCalorico());

var lima = new Fruta('Laranja lima', 50, "laranja");
console.log(lima.toString());
console.log(lima.getValorCalorico());

var baiana = new Fruta('Laranja baiana', 80, "laranja");
console.log(baiana.toString());
console.log(baiana.getValorCalorico());

var pizza = new Massa('Pizza', 3, 100);
console.log(pizza.toString());
console.log(pizza.getValorCalorico()); 
