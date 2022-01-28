import { Canvas } from "./DotCanvas"
import {dot} from '../../functions'
import { useEffect } from "react"
// import { Colors } from "../../classes"

// interface DotBoxProps {
//     color: Colors
//     increment: number
//     prop: string // FIX ME should be keyof class properties
// }

export function DotBox({color, increment = 0, prop, dotProp, hasBg, index}){
    let newColor = color

    useEffect(()=>{
        newColor = color
        newColor.increment(prop, 10)
    },[color])

    return <Canvas draw={dot} index={index} color={newColor} hasBg={hasBg} dotProp={dotProp} increment={increment}/>
}