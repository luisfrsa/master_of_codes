var _sexo;
var _nome;
var _gastoPorHora;
var _caloriasAcumuladas;

export class HumanoAbstract {
    constructor() {
        return (!Exception.checkClass(this, [Homem, Mulher]));
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
        let calorias = _comer(alimento);
        _caloriasAcumuladas +=calorias;
    }
    exercitar(exercicio, tempo) {
        if (!Exception.checkClass(exercicio, Exercicio)) {
            return false;
        }   
        _caloriasAcumuladas -= exercicio.exercitar(_gastoPorHora,tempo);     
        return true;
      
    }
}

function _comer(alimento) {
    if (!Exception.checkClass(alimento, Alimento)) {
        return 0;
    }
    console.log("Comendo " + alimento.getNome());
    console.log("Ganhando " + alimento.getValorCalorico() + " calorias");
    return alimento.getValorCalorico();
}
