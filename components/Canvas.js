import {useRef, useEffect} from 'react'
import { INCREMENT } from '../constants'
import { randomInt } from '../functions'

export function Canvas(props){
    const canvasRef = useRef(null)
    const {draw} = props
//pass index to canvas here
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = window.innerWidth 
        context.fillStyle = props.hasBg ?  props.color.stringify() : 'white'
        context.fillRect(0, -10, window.innerWidth, 500)

        // make circle
        const dotColor = props.color
        dotColor.increment(props.dotProp, randomInt(10))
        draw(context, dotColor.stringify(), {x: randomInt(window.innerWidth), y: randomInt(200), r: randomInt(50)})
        dotColor.increment(props.dotProp, randomInt(10))
        draw(context, dotColor.stringify(), {x: randomInt(window.innerWidth), y: randomInt(200), r: randomInt(50)})
        dotColor.increment(props.dotProp, randomInt(10))
        draw(context, dotColor.stringify(), {x: randomInt(window.innerWidth), y: randomInt(200), r: randomInt(50)})
    },[draw, props.color, props.hasBg])
    
    return (
        <canvas ref={canvasRef} {...props} />
    )
}