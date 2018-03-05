import Alimento from './classes/Alimento.class';
import Exception from './classes/Exception.class';
import Exercicio from './classes/Exercicio.class';
import Homem from './classes/Homem.class';
import Mulher from './classes/Mulher.class';

let laranja = new Alimento();
laranja.setNome("laranja");
laranja.setValorCalorico(60);
console.log(laranja.getNome());
console.log(laranja.getValorCalorico());


let homem = new Homem(1000);
console.log(homem);


// // join atividades para completar 2 ou + em 1 exercicio (classe + localstorage +whatever)
// let bar = new MyModule();

// tryMe1(1); // ReferenceError: tryMe1 is not defined
// tryMe2; // ReferenceError: tryMe2 is not defined
// bar.tryMe1(1); // TypeError: bar.tryMe1 is not a function
// bar.tryMe2; // undefined

// bar.tryMe3(1); // 101
// bar.getTryMe1(1); // 3
// bar.getTryMe2(); // 1234