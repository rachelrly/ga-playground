import {useRef, useEffect} from 'react'

export function Canvas(props){
    const canvasRef = useRef(null)
    const {draw, frameCount=0} = props
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        draw(context)
    },[draw])
    
    return (
        <canvas ref={canvasRef} {...props}/>
    )
}