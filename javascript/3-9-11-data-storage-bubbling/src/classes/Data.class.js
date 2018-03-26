
var Data = function (param) {

    var _data;

    var constructor = function (param) {
        _data = param ? new Date(param) : new Date();
    }

    var _getData = function () { return _data; };

    var _somarSegundos = function (numSegundos) { _data.setSeconds(_data.getSeconds() + numSegundos); };

    var _somarMinutos = function (numMinutos) { return _somarSegundos(numMinutos * 60); };

    var _somarHoras = function (numHoras) { return _somarMinutos(numHoras * 60); };

    var _somarDias = function (numDias) { return _somarHoras(numDias * 24); };

    var _getTimeZoneOffset = function () { return 'null'; return _data.getUTCTimezoneOffset(); };

    var _setTimeZone = function () {

    };
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
        console.log(stringDate +  dategmt);
        constructor(stringDate +  dategmt);
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

var d = new Data();
console.log(d.getData());
d.somarDias(1);
console.log(d.getData());
d.somarHoras(1);
console.log(d.getData());
d.somarMinutos(1);
console.log(d.getData());

console.log(d.getTimeZoneOffset());

console.log(d.getDateTimeFormatInfo());
console.log(d.getIso());

console.log(d.toLocaleString());
console.log(d.toLocaleString('australia'));
console.log(d.toLocaleString('estados unidos'));
console.log(d.toLocaleString('londres'));


d.updateGMT(5);
console.log(d.getData());
d.updateGMT(3);
console.log(d.getData());
d.updateGMT(-3);
console.log(d.getData());
d.updateGMT(3);
console.log(d.getData());
