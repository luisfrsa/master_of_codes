const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let AjaxGetCallback = function (id, callback, url) {
    let self = this;
    const xhttp = new XMLHttpRequest();
    xhttp.timeout = 2000;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            console.log("Fim da requisição com id [" + id + "]");
            if (xhttp.status === 200) {
                console.log('Get na url ' + url + " realizado com sucesso");
                callback(xhttp.status, xhttp.responseText, url);
            } else {
                console.log('Occorreu um erro ao requisitar Get na url ' + url);
                callback(xhttp.status, "Response muito grande para printar", url);
            }
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}
const urlOk = 'https://httpbin.org/anything';
const url404 = 'https://httpbin.org/404';
const callback = function (status, response, url) {
    console.log("I am a callback! from "+url);
    console.log("Status " + status);
    console.log("Response");
    console.log(response);
    console.log("--------------------------------");
}

new AjaxGetCallback(1, callback, urlOk);
new AjaxGetCallback(2, callback, url404);
new AjaxGetCallback(3, callback, urlOk);
new AjaxGetCallback(4, callback, url404);
new AjaxGetCallback(5, callback, urlOk);
new AjaxGetCallback(6, callback, url404);