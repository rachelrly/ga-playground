/**
 * 
 * rgb: {
 *      r: 0-255,
 *      g: 0-255,
 *      b: 0-255
 * }
 */

export function randomRgb(){
    return {
        r: randomInt255(),
        g: randomInt255(),
        b: randomInt255()
    }
}

export function rgbToString({r, g, b}){
    return`rgb(${r}, ${g}, ${b})`
}

// theoretically, props are r, g, b
export function incrementRgbProp(rgb, prop, increment){
    return {...rgb, [prop]: incrementValue(rgb[prop], increment)}
}

function incrementValue(initial, increment){
    // numeric validation for 0-255 range
    const sum = initial + increment
    if (sum <= 255 && sum >= 0) return sum
    // CHANGE ME RACHEL
    // THIS IS NOT WHAT WE WANT
    else return (-255 - increment) * -1
}

function randomInt255(){
    return Math.floor(Math.random()*255)
}