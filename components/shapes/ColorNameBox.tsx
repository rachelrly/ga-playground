import {useRef, useEffect} from 'react'
import { INCREMENT } from '../../constants'
import { randomInt } from '../../functions'

export function ColorNameBox(props){
    const canvasRef = useRef(null)
    const {draw} = props

    let newColor = props.color

    useEffect(()=>{
        newColor = props.color
        newColor.increment(props.prop, 10)
    },[props.color])
//pass index to canvas here
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = window.innerWidth 
        context.fillStyle = props.hasBg ?  props.color.stringify() : 'white'
        context.fillRect(0, -10, window.innerWidth, 500)

        context.font = "20px Arial";
        context.fillStyle = 'black';
        context.fillText(props.color.stringify(), 16, 50);
    },[draw, props.color, props.hasBg])
    
    return (
        <canvas ref={canvasRef} {...props} />
    )
}