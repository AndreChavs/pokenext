import Head from "next/head"
import Image from 'next/image'
import styles from '/styles/Sobre.module.css'

export default function Sobre() {
    console.log(styles)
    return <>
        <Head>
            <title>PokeNext - Sobre</title>
            <meta name="description" content="sobre PokeNext" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.sobre}>
            <h1>PokeNext - Sobre</h1>
            <p>Loremipsun texto casadocarailho</p>
            <Image src='/images/charizard.png' 
            width='300' 
            height='300'
            alt='charizard'
            />
        </main>
    </>
}