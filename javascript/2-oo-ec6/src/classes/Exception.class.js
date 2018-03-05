export class Exception {
    static checkClass(current, expect) {
        let found, expectClassName, message;
        let currentClassName = current.constructor.name;
        if (typeof (expect) == 'array') {
            expectClassName = expect.reduce();

            found = _checkClassArray(currentClassName, expect);
        } else {
            expectClassName = expect.reduce(_reduceClassNames, "");
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
    return "Nao foi possível instanciar esta Classe, Esperado: [" + expected + "], encontrado [" + found + "]";
}

function _checkClassArray(current, expecteds) {
    return (expecteds.some(expClass => { return _checkSomeClass(current, expClass) }));
}

function _checkClassElem(current, expect) {
    return _checkSomeClass(current,expect);
}

function _reduceClassNames(valorAnterior, valorAtual) {
    return valorAnterior + "|" + valorAtual.name
}
function _checkSomeClass(current, expecteds) {
    return current == expecteds;
}
