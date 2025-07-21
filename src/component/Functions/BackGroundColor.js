export function getBgColor(types) {
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
  return typeColors[types[0]] || typeColors.default;
}