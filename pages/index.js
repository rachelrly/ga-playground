import Head from 'next/head'
// import {TEXT} from '../constants/text'
// import { Paragraph } from '../components/Paragraph'
import {useState} from 'react'
import {Rgb, Hsla} from '../classes'
import {INCREMENT} from '../constants'
import { randomInt } from '../functions'
import { Button, ColorNameBox } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [color, setColor] = useState(new Hsla())
  const [hasBg, setHasBg] = useState(true)
  const arr = new Array(30).fill(undefined)
  
  function handleChangeColor(){
    console.log('THIS IS RANDOM INT 50 and TIMES TWO', 100 - randomInt(50), 100 - randomInt(50))
    const newColor = new Hsla()
    setColor(newColor)
  }

  function handleInvertBg(){
    setHasBg(!hasBg)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Generative Art Playground</title>
        <meta name="description" content="A place for exploration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button content="Click to change color" onClick={handleChangeColor}/>
        <Button content={hasBg ? 'Hide background colors' : 'Show background colors'} onClick={handleInvertBg} inverted={hasBg}/>

        <div className={styles.boxWrapper}>
        {arr.map((_, index)=> 
        <ColorNameBox key={index} index={index} hasBg={hasBg} prop='h' dotProp='a' increment={index * INCREMENT} color={color}/>
          )}
        </div>
      </main>
    </div>
  )
}
