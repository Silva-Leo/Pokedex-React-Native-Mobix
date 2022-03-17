//classe que vai definir quais informações os pokemons irão ter 

export default class Pokemon{
    id:number;
    name:string;
    image?:string;
    height?:number;
    weigth?:number;
    type?:string;
    move?:string;
    stats?:Stats;

    constructor(
        id:number,
        name:string,
        image?:string,
        height?:number,
        weigth?:number,
        type?:string,
        move?:string,
        stats?:Stats
     ) {
        this.id=id;
        this.name=name;
        this.image=image;
        this.height=height;
        this.weigth=weigth;
        this.type=type;
        this.move=move;
        this.stats=stats;
        }
}
export class Stats{
    hp:number;
    attack:number;
    defense:number;
    specialAttack:number;
    specialDefense: number;
    speed: number;

    constructor(
        hp:number,
        attack:number,
        defense:number,
        specialAttack:number,
        specialDefense: number,
        speed: number,
    ){
        this.hp=hp;
        this.attack=attack;
        this.defense=defense;
        this.specialAttack=specialAttack;
        this.specialDefense= specialDefense;
        this.speed= speed;
    }
}