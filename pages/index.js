import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/design/Card';

export const getStaticProps = async () => {
  //definir o numero maximo de pokemons que a API externa Fornece
  const maxPokemons = 150;
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const response = await fetch(`${url}/?limit=${maxPokemons}`)
  const dataPokemons = await response.json()
  //É necessário adicionar o index de cada pokemon
  // console.log(dataPokemons['results'])
  dataPokemons['results'].forEach( (item, index) => {
    item.id = index +1
    // console.log(item)
  })
  return {
    props:{
      pokemons: dataPokemons['results']
    }
  }
}

export default function Home({pokemons}) {
  return (<>
    <main>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next.js</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50'
        alt='pokebola' />
      </div>
      <ul className={styles.poke_container}>
        {pokemons.map( (pokemon) => {
          // console.log(pokemon.id)
          return <Card key={pokemon.id} pokemon={pokemon} />
        })}
      </ul>
    </main>
  </>   
  )
}
