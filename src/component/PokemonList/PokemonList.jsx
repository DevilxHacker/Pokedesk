import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    async function fetchPokemonList() {
        const result = await axios.get(currentPage);
        console.log(result.data);
        setNext(result.data.next);
        setPrevious(result.data.previous);
        const pokemonList = result.data.results;
        const pokemonPromises = pokemonList.map(pokemon => {
            return axios.get(pokemon.url);
        });
        const pokemonDetails = await Promise.all(pokemonPromises);
        const pokemonData = pokemonDetails.map(detail => ({
            name: detail.data.name,
            id: detail.data.id,
            image: detail.data.sprites.front_default,
            types: detail.data.types.map(typeInfo => typeInfo.type.name)
        }));
        setPokemonList(pokemonData);
        console.log(pokemonData);
    }
    useEffect(() => {
        fetchPokemonList();
        // eslint-disable-next-line
    }, [currentPage]);
    
    return (
        <div>
            <h1>Pokemon List</h1>
            <button onClick={() => next && setCurrentPage(next)} disabled={!next}>Next</button>
            <button onClick={() => previous && setCurrentPage(previous)} disabled={!previous}>Previous</button>
            {pokemonList.map(pokemon => (
            <Link to={`/pokemon/${pokemon.name}`}>
                <div key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>Types: {pokemon.types.join(', ')}</p>
                </div>
                    </Link> 
            ))}
        </div>
    );
}


export default PokemonList;