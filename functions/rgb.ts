import { incrementValue255, randomInt } from "./utils"

export interface Rgb {
    r: number,
    g: number,
    b: number
}

export function randomRgb():Rgb{
    return {
        r: randomInt(255),
        g: randomInt(255),
        b: randomInt(255)
    }
}

export function rgbToString({r, g, b}):string{
    return`rgb(${r}, ${g}, ${b})`
}


export function incrementRgbProp(rgb: Rgb, prop: keyof Rgb, increment: number):Rgb{
    return {...rgb, [prop]: incrementValue255(rgb[prop], increment)}
}