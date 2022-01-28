import {useRef, useEffect} from 'react'
import { rgbToString } from '../functions'

export function Canvas(props){
    const canvasRef = useRef(null)
    const {draw, frameCount=0} = props
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = rgbToString(props.color)
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        draw(context, props.color)
    },[draw])
    
    return (
        <canvas ref={canvasRef} {...props}/>
    )
}