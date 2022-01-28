import { randomInt } from "../functions"

export class Hsla {
    h: number // 0-255
    s: number // 0-100%
    l: number // 0-100%
    a?: number // 0-1

    constructor(h:number, s:number, l:number, a?:number){
        this.h = h
        this.s = s 
        this.l  = l
        this.a = a
    }

    public stringify(){
        if (this.a) return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`
        return `hsl(${this.h}, ${this.s}%, ${this.l})`
    }

    public generateRandom(){
        this.h = randomInt(255),
        this.s = randomInt(100),
        this.l = randomInt(100),
        this.a = Math.random()
    }
}