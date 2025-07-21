import Search from "../Search/search";
import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";

function Pokedesk(){
return<>
<div className="flex flex-col min-h-screen gap-6 p-4 bg-gray-50">

  <header className="text-center">
    <Header />
  </header>

  <div className="w-full max-w-lg mx-auto">
    <Search />
  </div>

  <main className="flex-1">
    <PokemonList />
  </main>
</div>
</>
}
export default Pokedesk;