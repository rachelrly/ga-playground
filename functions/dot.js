import { rgbToString } from "./rgb"

export function dot(ctx, color={r: 0, g: 0, b: 0}){
    ctx.fillStyle = rgbToString(color)
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
}
