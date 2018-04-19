var sum = function (accum, current) {
    return accum + current;
}
var mult = function (accum, current) {
    return accum * current;
}
var sub = function (tuple) {
    return tuple[0] - tuple[1];
}
var div = function (tuple) {
    return tuple[0] / tuple[1];
}
this.onmessage = function (e) {
    if (e.data && e.data.operation) {
        switch (e.data.operation) {
            case 'sum':
                this.postMessage({ operation: e.data.operation, values: e.data.values, status: 'OK', result: e.data.values.reduce(sum, 0) });
                break;
            case 'mult':
                this.postMessage({ operation: e.data.operation, values: e.data.values, status: 'OK', result: e.data.values.reduce(mult, 1) });
                break;
            case 'div':
                this.postMessage({ operation: e.data.operation, values: e.data.values, status: 'OK', result: div(e.data.values) });
                break;
            case 'sub':
                this.postMessage({ operation: e.data.operation, values: e.data.values, status: 'OK', result: sub(e.data.values) });
                break;
            default:
                this.postMessage({ operation: e.data.operation, values: e.data.values, status: 'Unknow operation', result: undefined });
                break;
        }
    }
}