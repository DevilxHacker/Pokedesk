function Search() {
  return (
  <div className="flex flex-col items-center w-full max-w-md gap-2 mx-auto sm:flex-row">
  <input
    type="text"
    placeholder="Search Pokémon..."
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button className="w-full px-4 py-2 text-white transition bg-blue-500 rounded-lg sm:w-auto hover:bg-blue-600">
    Search
  </button>
</div>
  );
}
export default Search;