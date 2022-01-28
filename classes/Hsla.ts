import { randomInt, incrementValue } from "../functions"

export class Hsla {
    h: number // 0-255
    s: number // 0-100%
    l: number // 0-100%
    a?: number // 0-1

    constructor(h = randomInt(255), s = randomInt(100), l = randomInt(100), a?:number){
        this.h = h
        this.s = s 
        this.l  = l
        this.a = a
    }

    public stringify(){
        if (Boolean(this.a)) return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`
    }

    public generateRandom(){
        this.h = randomInt(255),
        this.s = randomInt(100),
        this.l = randomInt(100),
        this.a = Math.random()
    }

    public increment(prop: 'h' | 's' | 'l' | 'a', increment: number){
        if (prop === 'h') this.h = incrementValue(this.h, increment, 255)
        else if (prop === 'a') {
            if (Boolean(this.a)) this.a = incrementValue(this.a, increment, 1)
            else this.a = Math.random()
        }
        // assumed to be 's' or 'l' percentage
        else this[prop] = incrementValue(this[prop], increment, 100)
    }
}