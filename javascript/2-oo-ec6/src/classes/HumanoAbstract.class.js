import Exception from './Exception.class';
import Exercicio from './Exercicio.class';
import Alimento from './Alimento.class';
import Homem from './Homem.class';
import Mulher from './Mulher.class';
export default class HumanoAbstract {
    constructor(nome, calorias) {
        if (!Exception.checkClass(this, [Homem, Mulher])) {
            return false;
        }
        let _sexo,
            _gastoPorHora,
            _nome = nome,
            _caloriasAcumuladas = calorias;

        this.getSexo = function () { return _sexo; };
        this.setSexo = function (sexo) { _sexo = sexo; };
        this.getNome = function () { return _nome; };
        this.setNome = function (nome) { _nome = nome; };
        this.getGastoPorHora = function () { return _gastoPorHora; };
        this.setGastoPorHora = function (gastoPorHora) { _gastoPorHora = gastoPorHora; };
        this.getCaloriasAcumuladas = function () { return _caloriasAcumuladas; };
        this.setCaloriasAcumuladas = function (caloriasAcumuladas) { _caloriasAcumuladas = caloriasAcumuladas; };

        this.toString = function () {
            let retorno;
            retorno += "Nome: " + _nome + "\n";
            retorno += "Sexo: " + _sexo + "\n";
            retorno += "Gasto por hora: " + _gastoPorHora + "\n";
            retorno += "Calorias acumuladas: " + _caloriasAcumuladas + "\n";
            return retorno;
        };

        this.comer = function (alimento) {
            let calorias = _comer(alimento);
            _caloriasAcumuladas += calorias;
        };

        this.exercitar = function (exercicio, tempo) {
            if (!Exception.checkClass(exercicio, Exercicio)) {
                return false;
            }
            _caloriasAcumuladas -= exercicio.exercitar(_gastoPorHora, tempo);
            return true;

        };
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
