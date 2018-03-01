function _comer(alimento) {
    console.log("Comendo " + alimento.nome);
}
class Alimento{
    constructor(nome){
        this.nome = nome;
    }
}
class Humano{
    constructor(nome){
        this.nome = nome;
    }
    comer(alimento){
        if(alimento instanceof Alimento){
            this.alimentar(alimento);
        }
    }
    _comer.bind(this)();
    
}
class Homem  extends Humano{
    constructor() {
        this.sexo = "M";
    }
}

class Gato {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(this.nome + ' faça barulho.');
    }
}

class Leao extends Gato {
    falar() {
        super.falar();
        console.log(this.nome + ' roars.');
    }
}

var l = new Leao('Fuzzy');
l.falar();

// Fuzzy faça barulho.
// Fuzzy roars.

class Abstract {
    constructor() {
        console.log('gg');
        console.log(this instanceof Abstract);
        console.log('izi');
        console.log(this instanceof Derived);
        // if (new.target === Abstract) {
        //     throw new TypeError("Cannot construct Abstract instances directly");
        // }
    }
}

class Derived extends Abstract {
    constructor() {
        super();
        // more Derived-specific stuff here, maybe
    }
}

const a = new Abstract(); // new.target is Abstract, so it throws
const b = new Derived(); // new.target is Derived, so no error