
import {useRef, useEffect} from 'react'
import { randomInt, dot } from '../../functions'
// import { Colors } from "../../classes"

// interface DotBoxProps {
//     color: Colors
//     increment: number
//     prop: string // FIX ME should be keyof class properties
// }

export function BoxBox({color, increment = 0, prop, dotProp, hasBg, index}){
    let newColor = color

    useEffect(()=>{
        newColor = color
        newColor.increment(prop, 10)
    },[color])

    return <Canvas draw={dot} index={index} color={newColor} hasBg={hasBg} dotProp={dotProp} increment={increment}/>
}


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