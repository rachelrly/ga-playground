
export interface Rgb {
    r: number,
    g: number,
    b: number
}

export function randomRgb():Rgb{
    return {
        r: randomInt255(),
        g: randomInt255(),
        b: randomInt255()
    }
}

export function rgbToString({r, g, b}):string{
    return`rgb(${r}, ${g}, ${b})`
}


export function incrementRgbProp(rgb: Rgb, prop: keyof Rgb, increment: number):Rgb{
    return {...rgb, [prop]: incrementValue(rgb[prop], increment)}
}

function incrementValue(initial, increment){
    // numeric validation for 0-255 range
    const sum = initial + increment
    if (sum <= 255 && sum >= 0) return sum
    else return (-255 + sum) * -1
     
}

function randomInt255(){
    return Math.floor(Math.random()*255)
}