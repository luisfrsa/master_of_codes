var data = Data();
console.log("Data agora: " + data.getData());
data.somarDias(1);
console.log("Data somada em 1 dia: " + data.getData());
data.somarHoras(1);
console.log("Data somada em 1 hora: " + data.getData());
data.somarMinutos(1);
console.log("Data somada em 1 minuto: " + data.getData());
data.somarSegundos(1);
console.log("Data somada em 1 segundo: " + data.getData());

console.log("Data em Time Zone Offset: " + data.getTimeZoneOffset());

console.log("Data DateTime format info: ", data.getDateTimeFormatInfo());
console.log("Data no formato ISO: " + data.getIso());

console.log("Data no formato String: " + data.toLocaleString());
console.log("Data no formato String no país AUSTRÁLIA: " + data.toLocaleString('australia'));
console.log("Data no formato String no país : ESTADOS UNIDOS" + data.toLocaleString('estados unidos'));
console.log("Data no formato String no país : LONDRES" + data.toLocaleString('londres'));

console.log("Data antes da conversão " + data.getData());

console.log("Convertendo data em GMT em +1: " +data.updateGMT(1));
console.log("Convertendo data em GMT em +3: " + data.updateGMT(3));
console.log("Convertendo data em GMT em +5: " + data.updateGMT(5));


function Data(param){

    var _data;

    var constructor = function (param) {
        return _data = param ? new Date(param) : new Date();
    }

    var _getData = function () { return _data; };

    var _somarSegundos = function (numSegundos) { _data.setSeconds(_data.getSeconds() + numSegundos); };

    var _somarMinutos = function (numMinutos) { return _somarSegundos(numMinutos * 60); };

    var _somarHoras = function (numHoras) { return _somarMinutos(numHoras * 60); };

    var _somarDias = function (numDias) { return _somarHoras(numDias * 24); };

    var _getTimeZoneOffset = function () { return _data.getTimezoneOffset(); };
   
    var _getDateTimeFormatInfo = function () {
        return Intl.DateTimeFormat().resolvedOptions();
    }

    var _getUTCGMT = function () {
        var timeDTFInfo = (_getDateTimeFormatInfo() / 60) * -1;
        var gmt = "GMT";
        if (timeDTFInfo !== 0) {
            gmt = +timeDTFInfo > 0 ? ' +' : ' ';
        }
        gmt += timeDTFInfo;

    }

    var _getIso = function () {
        return _data.toISOString();
    }

    var _toLocaleString = function (countryParam) {
        countryParam = countryParam || 'brasil';
        var country = getDateFromCountry(countryParam);
        return _data.toLocaleString(country.lang, { timeZone: country.timeZone });
    }

    var countries = [
        { country: 'brasil', lang: "pt-Br", timeZone: "America/Sao_Paulo" },
        { country: 'australia', lang: "en-Au", timeZone: "Australia/Sydney" },
        { country: 'estados unidos', lang: "en-Us", timeZone: "America/New_York" },
        { country: 'londres', lang: "en-Uk", timeZone: "Europe/London" },
    ];

    var _updateGMT = function (gmt) {
        var dategmt = "GMT" + (gmt < 0 ? "-" : (gmt > 0 ? '+' : '')) + (Math.abs(gmt) < 10 ? "0" : '') + Math.abs(gmt)  + "00";
        var stringDate = _data.toString().split("GMT")[0];
        return constructor(stringDate + dategmt).toUTCString();
    }

    function getDateFromCountry(countryParam) {
        return countries.find(function (country) { return countryParam == country.country; });

    }

    constructor(param);

    return {
        getData: _getData,
        somarSegundos: _somarSegundos,
        somarMinutos: _somarMinutos,
        somarHoras: _somarHoras,
        somarDias: _somarDias,
        getTimeZoneOffset: _getTimeZoneOffset,
        toLocaleString: _toLocaleString,
        getDateTimeFormatInfo: _getDateTimeFormatInfo,
        getIso: _getIso,
        updateGMT: _updateGMT,
    }
}