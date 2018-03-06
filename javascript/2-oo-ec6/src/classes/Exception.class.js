export default class Exception {
    static checkClass(current, expect) {
        
        let found, expectClassName, message;
        let currentClassName = current.constructor.name;

        if (typeof (expect) == 'object') {
            expectClassName = expect.reduce(_reduceClassNames, "");
            found = _checkClassArray(currentClassName, expect);
        } else {
            expectClassName = expect.constructor.name;
            found = _checkClassElem(currentClassName, expect);
        }
        if (!found) {
            message = _buildMessage(currentClassName, _reduceClassNames);
            this.throwError(message);
            return false;
        }
        return true;
    }
    static throwError(erro) {
        throw "Exception ao realizar operação: " + erro;
    }
}
function _buildMessage(found, expected) {
    return "Nao foi possível instanciar esta Classe, Esperado: [" + expected.name + "], encontrado [" + found + "]";
}

function _checkClassArray(current, expecteds) {
    return (expecteds.some(expClass => { return _checkSomeClass(current, expClass.name);}));
}

function _checkClassElem(current, expect) {
    return _checkSomeClass(current,expect.name);
}

function _reduceClassNames(valorAnterior, valorAtual) {
    return valorAnterior + "|" + valorAtual.name;
}
function _checkSomeClass(current, expecteds) {
    return current == expecteds;
}
