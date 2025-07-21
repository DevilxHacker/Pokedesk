import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBgColor } from "../Functions/BackGroundColor";


function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    async function fetchPokemonList() {
        const result = await axios.get(currentPage);
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
            types: detail.data.types.map(t => t.type.name),
        }));
        setPokemonList(pokemonData);
    }
    useEffect(() => {
        fetchPokemonList();
        // eslint-disable-next-line
    }, [currentPage]);

    return (
        <div className={`max-w-6xl p-4 mx-auto  `}>

  <div className="flex justify-center gap-4 mb-6">
    <button
      onClick={() => previous && setCurrentPage(previous)}
      disabled={!previous}
      className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50"
    >
      Previous
    </button>
    <button
      onClick={() => next && setCurrentPage(next)}
      disabled={!next}
      className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50"
    >
      Next
    </button>
  </div>

  <div className={`grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  `}>
    {pokemonList.map((pokemon) => (
      <Link
        key={pokemon.id}
        to={`/pokemon/${pokemon.name}`}
        className={`flex flex-col items-center p-4 transition shadow rounded-xl hover:shadow-lg ${getBgColor(pokemon.types)} shadow-lg rounded-xl`}
      >
        <img
          src={pokemon.image }
          alt={pokemon.name}
          className="object-contain w-28 h-32 min-w-[100px] min-h-[120px] max-w-[160px] max-h-[180px] mb-2"
        />
        <h2 className="text-lg font-semibold text-gray-800 capitalize">
          {pokemon.name}
        </h2>
      </Link>
    ))}
  </div>
</div>

    );
}


export default PokemonList;