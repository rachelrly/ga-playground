import Head from 'next/head'
import {TEXT} from '../constants/text'
import { Paragraph } from '../components/Paragraph'
import { Canvas } from '../components/Canvas'
import {dot, randomRgb, incrementRgbProp} from '../functions'
import styles from '../styles/Home.module.css'

export default function Home() {
  const INCREMENT = 10
  const color = randomRgb()
  return (
    <div className={styles.container}>
      <Head>
        <title>Generative Art Playground</title>
        <meta name="description" content="A place for exploration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Generative art playground</h1>
        {/* <Paragraph content={TEXT} />   */}
        <Canvas draw={dot} color={color}/>
        {/* <Paragraph content={TEXT} />  */}
        <Canvas draw={dot} color={incrementRgbProp(color, 'r', INCREMENT)}/>
        <Canvas draw={dot} color={incrementRgbProp(color, 'r', INCREMENT * 2)}/>
        {/* <Paragraph content={TEXT} />  */}
        <Canvas draw={dot} color={incrementRgbProp(color, 'r', INCREMENT * 3)}/>
        <Canvas draw={dot} color={incrementRgbProp(color, 'r', INCREMENT * 4)}/>
        <Canvas draw={dot} color={incrementRgbProp(color, 'r', INCREMENT * 5)}/>

        <Paragraph content={TEXT} /> 
        <Paragraph content={TEXT} />    
      </main>
    </div>
  )
}
