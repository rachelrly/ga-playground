import { randomInt, incrementValue255 } from "../functions"

export class Rgb {
    r: number
    g: number
    b: number

    constructor(r:number, g:number, b:number){
        this.r = r
        this.g = g
        this.b = b
    }

    public stringify(){
        return`rgb(${this.r}, ${this.g}, ${this.b})`
    }

    public generateRandom(){
        this.r = randomInt(255)
        this.g = randomInt(255)
        this.b = randomInt(255)
    }

    public increment(prop: 'r' | 'g' | 'b', increment: number){
        this[prop]= incrementValue255(this[prop], increment)
    }

}