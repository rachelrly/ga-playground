export function dot(ctx, color){
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
}
