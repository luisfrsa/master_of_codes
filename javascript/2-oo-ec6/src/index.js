import Alimento from './classes/Alimento.class';
import Exercicio from './classes/Exercicio.class';
// import HumanoAbstract from './classes/HumanoAbstract.class';
import Homem from './classes/Homem.class';
// import Mulher from './classes/Mulher.class';

let atleta = new Homem("Luis", 10000);
console.log(atleta.toString());

let banana = new Alimento();
banana.setNome("Banana");
banana.setValorCalorico(100);

let pao = new Alimento();
pao.setNome("Pao");
pao.setValorCalorico(150);

let energetico = new Alimento();
energetico.setNome("Energetico");
energetico.setValorCalorico(250);

let alimentos = [
    { alimento: banana, quantidade: 2 },
    { alimento: pao, quantidade: 3 },
    { alimento: energetico, quantidade: 1 }
];

let triatlo = [
    { exercicio: new Exercicio("natacao", 300), duracao: 1 },
    { exercicio: new Exercicio("ciclismo", 200), duracao: 2 },
    { exercicio: new Exercicio("maratona", 150), duracao: 3 }
];
alimentos.forEach(alimento => {
    for (let i = 0; i < alimento.quantidade; i++) {
        atleta.comer(alimento.alimento);
    }
});
triatlo.forEach(exec => {
    atleta.exercitar(exec.exercicio, exec.duracao);
});

console.log(atleta.toString());
