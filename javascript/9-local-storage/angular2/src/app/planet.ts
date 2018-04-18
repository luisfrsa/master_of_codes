export class Planet {

    id: number;
    name: string;
    size: {
        radius: number;
        diameter: number;
    };
    position: string;    

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
