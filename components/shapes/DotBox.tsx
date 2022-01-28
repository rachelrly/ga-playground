import { Canvas } from "../Canvas"
import {dot} from '../../functions'
import { Colors } from "../../classes"

interface DotBoxProps {
    color: Colors
    increment: number
    prop: string // FIX ME should be keyof class properties
}

export function DotBox({color, increment = 0, prop, dotProp}){
    const newColor = color
    newColor.increment(prop, increment)
    return <Canvas draw={dot} color={newColor} dotProp={dotProp} increment={increment}/>
}