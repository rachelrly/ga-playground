export function incrementValue255(initial, increment){
    // numeric validation for 0-255 range
    const sum = initial + increment
    if (sum <= 255 && sum >= 0) return sum
    else return (-255 + sum) * -1
     
}


export function randomInt(max=1){
    return Math.floor(Math.random() * max)
}