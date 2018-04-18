
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