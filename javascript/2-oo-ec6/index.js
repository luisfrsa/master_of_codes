import Class from './class';
join atividades para completar 2 ou + em 1 exercicio (classe + localstorage +whatever)
let bar = new MyModule();

tryMe1(1); // ReferenceError: tryMe1 is not defined
tryMe2; // ReferenceError: tryMe2 is not defined
bar.tryMe1(1); // TypeError: bar.tryMe1 is not a function
bar.tryMe2; // undefined

bar.tryMe3(1); // 101
bar.getTryMe1(1); // 3
bar.getTryMe2(); // 1234