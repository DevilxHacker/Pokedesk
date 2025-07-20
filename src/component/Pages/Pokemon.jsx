import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
function Pokemon(){
    const [pokemon, setPokemon] = useState(null);
    const {name} = useParams();
    const url='https://pokeapi.co/api/v2/pokemon/'+name;
    
    async function fetchPokemonData(){
        const result= await axios.get(url);
    const pokemon=result.data;
        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(typeInfo=>typeInfo.type.name),
            moves: pokemon.moves.map(moveInfo=>moveInfo.move.name),
            image: pokemon.sprites.other.dream_world.front_default
        });

    }

    useEffect(() => {
        fetchPokemonData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
        <h1 >
            <Link to="/">
                Pokedex
            </Link>
        </h1>
        {pokemon && <div >
            <div>
                {pokemon.name}
            </div>
            <div >
                <img src={pokemon.image} />
            </div>
            <div >
                <div>
                    height: {pokemon.height}

                </div>
                <div>
                weight: {pokemon.weight}

                </div>
            </div>
            <div >
               type: {pokemon.types.join(', ')}
            </div>
            <div >
                moves: {pokemon.moves.join(', ')}
            </div>
        </div>}
        </>

    )
}    


export default Pokemon;