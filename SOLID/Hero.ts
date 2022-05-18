import { randomUUID } from "crypto";

class Hero { // Atributos do tipo Public permitem acesso, seja dentro da classe ou por meio de um objeto.
    readonly id: string; // readonly permite que seja feito apenas a leitura do atributo. O atributo pode ser setado apensas no contrutor.
    private _name: string; // Atributos ou métodos do tipo private são visíveis somente dentro da classe. Ao instanciar os objetos, não é possível fazer qualquer alteração de forma direta.
    private _powers: Array<string>; // string[]
    private _age: number;
    private _alive: boolean = true;
    private _level: number;
    private _armor?: string;

    constructor(name: string, age: number, powers: Array<string>) {
        this.id = randomUUID();
        this._name = name;
        this._age = 0;        
        this._powers = [];
        this._level = 0;       
        
        this.name = name;
        this.age = age;
        this.powers = powers;
    }

    sayHello(): string {
        return `${this._name} say hello`;
    }

    get name(): string { // Getters são formas de acessarmos as informações que estão privadas dentro do 
        return this._name;
    }

    set name(name: string) { // Setters permitem colocarmos novos valores nos atributos privados. Eles podem ter algumas validações sobre o atributo
        if (!name) throw new Error('Name is required');
        this._name = name;
    }

    set age(age: number) {
        if (age < 18) throw new Error('Age must be greater then 18');
        this._age = age;
    }

    get age(): number {
        return this._age;
    }

    get powers(): Array<string> {
        return this._powers;
    }

    set powers(powers: Array<string>) {
        this._powers = powers;
    }

    /*getName(): string { // O get e set pode ser feito em forma de método!
        return this.name;
    }

    setName(name: string) {
        if (!name) throw new Error('Name is required');
        this.name = name;
    }*/
}

/*const hero1: Hero = new Hero("Thor", 21, ["Trovão"]); // Instancias dos objetos -> Aqui, o molde da classe vira um objeto com as caracteristicas reais;
const hero2: Hero = new Hero("Batman", 32, ["Inteligentes"]);*/

export default Hero;