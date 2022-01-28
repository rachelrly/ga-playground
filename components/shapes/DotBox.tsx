import { Canvas } from "../Canvas"
import {dot} from '../../functions'
import { useEffect } from "react"
// import { Colors } from "../../classes"

// interface DotBoxProps {
//     color: Colors
//     increment: number
//     prop: string // FIX ME should be keyof class properties
// }

export function DotBox({color, increment = 0, prop, dotProp}){
    let newColor = color

    useEffect(()=>{
       // console.log('COLOR IS CHANGING', color)
        newColor = color
        newColor.increment(prop, 10)
        console.log('THIS IS MY NEW PROP', newColor === color, prop)

    },[color])

    return <Canvas draw={dot} color={newColor} dotProp={dotProp} increment={increment}/>
}