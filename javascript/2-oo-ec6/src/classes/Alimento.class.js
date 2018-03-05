
let _nome;
let _valorCalorico;
export default class Alimento{
    constructor(){
    }
    getNome() { return _nome; }
    setNome(nome) { _nome = nome; }
    getValorCalorico(){ return _valorCalorico; }
    setValorCalorico(valorCalorico) { _valorCalorico = valorCalorico ; }
   
}