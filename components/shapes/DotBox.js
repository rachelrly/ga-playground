import { Canvas } from "../Canvas"
import {dot, incrementRgbProp} from '../../functions'

export function DotBox({color, increment = 0, prop='r'}){
    return <Canvas draw={dot} color={incrementRgbProp(color, prop, increment)} increment={increment}/>
}