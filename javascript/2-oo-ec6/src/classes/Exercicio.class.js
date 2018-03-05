var _caloriasPorHora ;
export class Exericio{
    constructor(caloriasPorHora){
        _caloriasPorHora = caloriasPorHora
    }

    getCaloriasPorHora() { return _caloriasPorHora }
    setCaloriasPorHora(caloriasPorHora) { _caloriasPorHora = caloriasPorHora }

    exercitar(gastoPorHoraHumano,quantidadeHoras){
        return ((gastoPorHoraHumano+_caloriasPorHora) * quantidadeHoras);
    }
}