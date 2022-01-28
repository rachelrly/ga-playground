import { randomRgb, rgbToString } from "./rgb"

export function grid(ctx, color=rgbToString(randomRgb())){
    ctx.fillStyle = color
    
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
}

// function canvasData(ctx) : (c)
// returns height, width, 
export function canvasDimensions(ctx){

}