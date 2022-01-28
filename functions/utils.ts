export function incrementValue(initial, increment, max){
    const sum = initial + increment
    if (sum <= max && sum >= 0) return sum
    else {
        const total = (-max + sum) * -1
        return Math.abs(total)

}
}

export function randomInt(max=1){
    return Math.floor(Math.random() * max)
}