import { randomInt } from "./utils"

export interface Hsla {
    h: number // 0-255
    s: number // 0-100%
    l: number // 0-100%
    a?: number // 0-1
}

function randomHsl():Hsla{
    return {
        h: randomInt(255),
        s: randomInt(100),
        l: randomInt(100)
    }
}

export function randomHsla(): Hsla{
    return {...randomHsl(), a: Math.random()}
}

export function hslaToString({h, s, l, a=undefined}){
    return `hsla(${h}, ${s}%, ${l}%${Boolean(a) ? `, ${a}` : ''})`
}