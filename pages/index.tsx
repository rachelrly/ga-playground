import Head from 'next/head'
// import {TEXT} from '../constants/text'
// import { Paragraph } from '../components/Paragraph'
import {useState} from 'react'
import { DotBox } from '../components/shapes/DotBox'
import {Rgb, Hsla, Colors} from '../classes'
import {INCREMENT} from '../constants'
import { Button } from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [color, setColor] = useState<Colors>(new Hsla())
  // const [hasBg, setHasBg] = useState(true) // DO SOMETHING ELSE WITH THIS PROP
  const arr = new Array(20).fill(undefined)
  const isRgb = color instanceof Rgb
  const prop = isRgb ? 'r' : 'h'
  const dotProp = isRgb ? 'b' : 'l'

  function handleNewRgb(){
    const newColor = new Rgb()
    setColor(newColor)
  }

  function handleNewHsla(){
    const newColor = new Hsla()
    setColor(newColor)
  }

  // Logic currently gives weird results.
  // Whole thing needs to be refactored
  // function handleInvertBg(){
  //   setHasBg(!hasBg)
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Generative Color Playground</title>
        <meta name="description" content="A place for exploration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Button content={isRgb ? 'New RGB color (current)' :  'New RGB color'}  onClick={handleNewRgb}/>
        <Button content={isRgb ? 'New HSLA color' :  'New HSLA color (current)'} onClick={handleNewHsla} inverted={true}/>
        <div className={styles.boxWrapper}>
        {arr.map((_, index)=> <DotBox key={index} index={index} hasBg={true} prop={prop} dotProp={dotProp} increment={index * INCREMENT} color={color}/>
          )}
        </div>
      </main>
    </div>
  )
}
