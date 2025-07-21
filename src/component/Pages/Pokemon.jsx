import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const typeColors = {
  fire: "bg-red-200",
  water: "bg-blue-200",
  grass: "bg-green-200",
  electric: "bg-yellow-200",
  psychic: "bg-pink-200",
  ice: "bg-cyan-200",
  dragon: "bg-purple-300",
  dark: "bg-gray-600",
  fairy: "bg-pink-100",
  normal: "bg-gray-200",
  fighting: "bg-orange-200",
  ground: "bg-yellow-300",
  rock: "bg-stone-300",
  bug: "bg-lime-200",
  ghost: "bg-indigo-300",
  poison: "bg-purple-200",
  steel: "bg-gray-300",
  flying: "bg-sky-200",
};

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  const url = "https://pokeapi.co/api/v2/pokemon/" + name;

  async function fetchPokemonData() {
    const result = await axios.get(url);
    const pokemon = result.data;
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map((typeInfo) => typeInfo.type.name),
      moves: pokemon.moves.map((moveInfo) => moveInfo.move.name),
      image: pokemon.sprites.other.dream_world.front_default,
    });
  }
  
  useEffect(() => {
      
    fetchPokemonData();
    // eslint-disable-next-line
  }, []);
const bgColor = pokemon ? typeColors[pokemon.types[0]] || "bg-gray-200" : "bg-gray-200";
  return (
    <>
    
        <div className={`p-4 rounded-xl shadow hover:shadow-lg transition bg-orange-200`}>
      <h1 className="my-6 text-3xl font-bold text-center">
        <Link to="/" className="text-red-500 transition hover:text-red-700">
          Pokedex
        </Link>
      </h1>

      {pokemon && (
        <div className={`flex flex-col items-center max-w-md gap-4 p-6 mx-auto ${bgColor} shadow-lg rounded-xl sm:max-w-lg md:max-w-xl`}>
          <div className="text-2xl font-semibold text-gray-800 capitalize">
            {pokemon.name}
          </div>

          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 text-base text-gray-700">
            <div className="text-center">
              <span className="font-semibold">Height:</span> {pokemon.height}
            </div>
            <div className="text-center">
              <span className="font-semibold">Weight:</span> {pokemon.weight}
            </div>
          </div>

          <div className="text-sm text-center text-gray-600 sm:text-base">
            <span className="font-semibold">Type:</span>{" "}
            {pokemon.types.join(", ")}
          </div>

          <div className="w-full">
            <span className="block mb-2 font-semibold text-center">Moves:</span>
            <div className="grid grid-cols-2 gap-2 p-2 overflow-y-auto text-sm text-gray-700 border rounded-lg sm:grid-cols-3 max-h-40 bg-gray-50">
              {pokemon.moves.map((move, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-center capitalize bg-red-100 rounded "
                >
                  {move}
                </span>
              ))}
            </div>
          </div>
        </div>
    )}
    </div>
    </>
  );
}

export default Pokemon;
