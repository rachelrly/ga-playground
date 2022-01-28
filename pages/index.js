import Head from 'next/head'
import {TEXT} from '../constants/text'
import { Paragraph } from '../components/Paragraph'
import { Canvas } from '../components/Canvas'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Canvas Playground</title>
        <meta name="description" content="A place for exploration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Canvas Playground
        </h1>
        <Canvas />
        <Paragraph content={TEXT} /> 
        <Canvas />
        <Canvas />
 
        <Paragraph content={TEXT} /> 
        <Paragraph content={TEXT} /> 
        <Paragraph content={TEXT} />    
      </main>
    </div>
  )
}
