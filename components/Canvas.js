import {useRef, useEffect} from 'react'
import { INCREMENT } from '../constants'
import { rgbToString, incrementRgbProp } from '../functions'

export function Canvas(props){
    const canvasRef = useRef(null)
    const {draw} = props
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        context.fillStyle = rgbToString(props.color)
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

       draw(context, incrementRgbProp(props.color, 'g', INCREMENT))
    },[draw])
    
    return (
        <canvas ref={canvasRef} {...props}/>
    )
}