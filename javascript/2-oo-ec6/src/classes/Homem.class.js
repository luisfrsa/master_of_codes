import HumanoAbstract from './HumanoAbstract.class';
export default class Homem extends HumanoAbstract {
        constructor(nome,calorias) {
                super(nome,calorias);
                this.setSexo("H");
                this.setGastoPorHora(15);
        }
}