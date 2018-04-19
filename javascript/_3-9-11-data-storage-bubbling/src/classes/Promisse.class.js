
var Data = function (param) {

    var data = param ? new Date(param) : new Date();

    var _getData = function () { return data; };

    var _somarSegundos = function (numSegundos) { data.setSeconds(data.getSeconds() + numSegundos); };

    var _somarMinutos = function (numMinutos) { return _somarSegundos(numMinutos * 60); };

    var _somarHoras = function (numHoras) { return _somarMinutos(numHoras * 60); };

    var _somarDias = function (numDias) { return _somarHoras(numDias * 24); };

    var _getTimeZoneOffset = function () { return data.getTimezoneOffset(); };

    var _toLocaleString = function (countryParam) {
        countryParam = countryParam || 'brasil';
        var country = getDateFromCountry(countryParam);
        return data.toLocaleString(country.lang, { timeZone: country.timeZone });
    }
    var countries = [
        { country: 'brasil', lang: "pt-Br", timeZone: "America/Sao_Paulo" },
        { country: 'australia', lang: "en-Au", timeZone: "Australia/Sydney" },
        { country: 'estados unidos', lang: "en-Us", timeZone: "America/New_York" },
        { country: 'londres', lang: "en-Uk", timeZone: "Europe/London" },

    ];
    function getDateFromCountry(countryParam) {
        return countries.find(function (country) {return countryParam == country.country; });

    }
    return {
        getData: _getData,
        somarSegundos: _somarSegundos,
        somarMinutos: _somarMinutos,
        somarHoras: _somarHoras,
        somarDias: _somarDias,
        getTimeZoneOffset: _getTimeZoneOffset,
        toLocaleString: _toLocaleString
    }
}

var d = new Data();
console.log(d.getData());
d.somarDias(1);
console.log(d.getData());
d.somarHoras(1);
console.log(d.getData());
d.somarMinutos(1);
console.log(d.getData());

console.log(d.getTimeZoneOffset());


console.log(d.toLocaleString());
console.log(d.toLocaleString('australia'));
console.log(d.toLocaleString('estados unidos'));
console.log(d.toLocaleString('londres'));