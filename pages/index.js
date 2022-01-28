import Head from 'next/head'
// import {TEXT} from '../constants/text'
// import { Paragraph } from '../components/Paragraph'
import {useState} from 'react'
import { DotBox } from '../components/shapes/DotBox'
import {Rgb, Hsla} from '../classes'
import {INCREMENT} from '../constants'
import { Button } from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [color, setColor] = useState(new Hsla())
  const arr = new Array(30).fill(undefined)
  
  function handleChangeColor(){
    console.log('HANDLING NEW COLOR -------------------------------------------------------------------------------------------------')
    console.log('HANDLE CHANGE COL RUNNING')
    const newColor = new Hsla()
    setColor(newColor)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Generative Art Playground</title>
        <meta name="description" content="A place for exploration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Generative art playground</h1>
        <Button content="Click to change color" onClick={handleChangeColor}/>
        <div >
        {arr.map((_, index)=> <DotBox key={index} prop='h' dotProp='l' increment={index * INCREMENT} color={color}/>
          )}
        </div>
      </main>
    </div>
  )
}
