import Image from "next/image";
import styles from '/styles/Pokemon.module.css'

export const getStaticPaths = async () => {
    const maxPokemons = 150;
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(`${url}/?limit=${maxPokemons}`)
    const dataPokemons = await response.json()
    //O método exige um parâmetro (id) = [id].js como declarado no arquivo
    const paths = dataPokemons['results'].map( (pokemon, index) => {
        return {
            params: { id:(index + 1).toString() }
        }
    })    
    return {
        paths, fallback:false
    }
}
export const getStaticProps = async ({params}) => {
    const id = params.id   
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return {
        props:{ pokemon:data }
    }
}

export default function Pokemon({pokemon}) {   
    // return <div>{pokemon.name}</div>
    return <>
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
                width='200' height='200' alt={pokemon.name}
            />
            <div className={styles.number}>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo do Pokemon:</h3>
                <div className={styles.types_content}>
                    {pokemon['types'].map( (item, index) => {
                        return <span key={index} 
                        className={`${styles.type} ${styles['type_' + item.type.name]}`}>
                            {item.type.name}
                        </span>
                    })}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.dataHeight}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10}cm</p>
                </div>
                <div className={styles.dataWeight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10}kg</p>
                </div>
            </div>
        </div>
    </>
}