
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