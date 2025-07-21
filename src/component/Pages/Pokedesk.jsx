import Search from "../Search/Search";
import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";
import {useState} from "react";
import Pokemon from "./Pokemon";

function Pokedesk(){
  const [searchTerm, setSearchTerm] = useState('');
return<>
<div className="flex flex-col min-h-screen gap-6 p-4 bg-gray-50">

  <header className="text-center">
    <Header />
  </header>

  <div className="w-full max-w-lg mx-auto">
    <Search updateSearchTerm={setSearchTerm}/>
  </div>

  <main className="flex-1">
    {searchTerm ? <Pokemon searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : <PokemonList />}
    
  </main>
</div>
</>
}
export default Pokedesk;