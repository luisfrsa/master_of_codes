function _comer(alimento) {
    if (!alimento instanceof Alimento) {
        return new Exception("Nao foi possível instanciar esta Classe, Esperado: [Homem || Mulher], encontrado [HumanoAbstract]");
    }
    console.log("Comendo " + alimento.getNome());
    console.log("Ganhando " + alimento.getValorCalorico() + " calorias");
    return alimento.getValorCalorico();
}
function verificaTipo(self) {
    if (!self instanceof Mulher && !self instanceof Homem) {
        return new Exception("Nao foi possível instanciar esta Classe, Esperado: [Homem || Mulher], encontrado [HumanoAbstract]");
    }
    return true;
}

function exercitar(){

}

class HumanoAbstract {
    constructor(sexo) {    
        if(verificaTipo(this)){
            var _sexo = sexo;
            var _nome;
            var _gastoPorHora;
            var _caloriasAcumuladas;
        }
    }    
    getSexo() { return _sexo }
    setSexo(sexo) { _sexo = sexo }
    getNome() { return _nome }
    setNome(nome) { _nome = nome }
    getGastoPorHora() { return _gastoPorHora }
    setGastoPorHora(gastoPorHora) { _gastoPorHora = gastoPorHora }
    getCaloriasAcumuladas() { return _caloriasAcumuladas }
    setCaloriasAcumuladas(caloriasAcumuladas) { _caloriasAcumuladas = caloriasAcumuladas }

    comer(alimento) {
        somaCalorias(_comer(alimento));
    }
    somaCalorias(valor){
        
    }


}
class Mulher extends HumanoAbstract {
    constructor() {
        super("M");
        this.setGastoPorHora(10);
    }

}
class Homem extends HumanoAbstract {
    constructor() {
        super("H");
        this.setGastoPorHora(12);
    }
}
