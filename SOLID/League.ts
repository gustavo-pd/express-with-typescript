import { SrvRecord } from "dns";
import Hero from "./Hero";

class League {
    private _name: string;
    private _heroes: Array<Hero>;

    constructor() {
        this._name = '';
        this._heroes = [];

        //this.name = name;
    }

    addHero(hero: Hero) {
        const heroFind = this._heroes.find((h) => h.name === hero.name);
        if (heroFind) throw new Error('Hero already exists');

        this._heroes.push(hero);
    }

    doPresentation(): void {
        console.log("Name: ", this._name);
        console.table(this._heroes);
    }

    doPresentationWithHello(): void {
        console.log("Name: ", this._name);
        this._heroes.forEach((h) => console.log(h.sayHello()));
    }

    set name(name: string) {
        if (!name) throw new Error('"Name" is required');
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}

const avenges: League = new League();
avenges.name = 'Avengers';

const hero1 = new Hero('Homem de Ferro', 43, ['Robo']);
const hero2 = new Hero('Capitã Marvel', 23, ['Voa']);

avenges.addHero(hero1);
avenges.addHero(hero2);

// avenges.doPresentation();

console.log(avenges.name);

avenges.doPresentationWithHello();