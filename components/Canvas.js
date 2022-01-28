import {useRef, useEffect} from 'react'
import { INCREMENT } from '../constants'

export function Canvas(props){
    const canvasRef = useRef(null)
    const {draw} = props
//pass index to canvas here
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = window.innerWidth 
        context.fillStyle = props.hasBg ?  props.color.stringify() : 'white'
        context.fillRect(0, 0, window.innerWidth, 100)

        // make circle
        const dotColor = props.color
        dotColor.increment(props.dotProp, INCREMENT/2)
        draw(context, dotColor.stringify(), {x: context.canvas.width/4, y: context.canvas.height/4, r: 30})
        dotColor.increment(props.dotProp, INCREMENT)
        draw(context, dotColor.stringify(), {x: context.canvas.width/2, y: context.canvas.height/2, r: 30})
        dotColor.increment(props.dotProp, INCREMENT*2)
        draw(context, dotColor.stringify(), {x: context.canvas.width, y: context.canvas.height, r: 30})
    },[draw, props.color, props.hasBg])
    
    return (
        <canvas ref={canvasRef} {...props} />
    )
}