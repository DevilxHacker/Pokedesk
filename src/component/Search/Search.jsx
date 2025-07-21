import useDebounce from "../Functions/useDebounce";

function Search({updateSearchTerm}) {
  const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));
  return (
  <div className="flex flex-col items-center w-full max-w-md gap-2 mx-auto sm:flex-row">
  <input
    type="text"
    placeholder="Search Pokémon..."
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    onChange={debounceUpdateSearch}
  />
 
</div>
  );
}
export default Search;