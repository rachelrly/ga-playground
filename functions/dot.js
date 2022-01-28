import { incrementRgbProp, rgbToString } from "./rgb"

export function dot(ctx, color={r: 0, g: 0, b: 0}){
    ctx.fillStyle = rgbToString(incrementRgbProp(color, 'g', 10))
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
}

// function canvasData(ctx) : (c)
// returns height, width, 
export function canvasDimensions(ctx){

}