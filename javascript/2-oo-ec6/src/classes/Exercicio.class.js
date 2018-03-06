export default class Exericio {
    constructor(nome, caloriasPorHora) {
        let _caloriasPorHora = caloriasPorHora;
        let _nome = nome;
        
        this.getNome= function() { return _nome; }
        this.setNome= function(nome) { _nome = nome; }
        
        this.getCaloriasPorHora= function() { return _caloriasPorHora; }
        this.setCaloriasPorHora= function(caloriasPorHora) { _caloriasPorHora = caloriasPorHora; }
        
        this.exercitar= function(gastoPorHoraHumano, quantidadeHoras) {
            let gasto = ((gastoPorHoraHumano + _caloriasPorHora) * quantidadeHoras);
            console.log("Realizando exercicio " + _nome + " com gasto de " + _caloriasPorHora + " por hora durante " + quantidadeHoras + " hora(s), gastando " + gasto + " calorias");
            return gasto;
        }
    }
}