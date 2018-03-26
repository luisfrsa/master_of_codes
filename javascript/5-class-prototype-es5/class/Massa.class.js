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