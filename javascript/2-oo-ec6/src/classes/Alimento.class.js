

export default class Alimento{
    constructor(){
        let _nome;
        let _valorCalorico;
        this.getNome = function() { return _nome; }
        this.setNome = function(nome) { _nome = nome; }
        this.getValorCalorico = function(){ return _valorCalorico; }
        this.setValorCalorico = function(valorCalorico) { _valorCalorico = valorCalorico; }
    }
    
   
}