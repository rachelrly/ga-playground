import {useRef, useEffect} from 'react'
import { INCREMENT } from '../constants'

export function Canvas(props){
    const canvasRef = useRef(null)
    const {draw} = props

    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = props.color.stringify()
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        // make circle
        const dotColor = props.color
        dotColor.increment('g', INCREMENT)
        draw(context, dotColor.stringify())
    },[draw])
    
    return (
        <canvas ref={canvasRef} {...props}/>
    )
}