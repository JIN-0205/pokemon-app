const TYPE_CLASSES: Record<string, string> = {
  normal: "bg-gray-300 text-gray-900",
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  grass: "bg-green-500 text-white",
  electric: "bg-yellow-400 text-black",
  ice: "bg-cyan-400 text-black",
  fighting: "bg-orange-700 text-white",
  poison: "bg-purple-500 text-white",
  ground: "bg-amber-700 text-white",
  flying: "bg-indigo-400 text-white",
  psychic: "bg-pink-500 text-white",
  bug: "bg-lime-500 text-black",
  rock: "bg-stone-500 text-white",
  ghost: "bg-violet-700 text-white",
  dragon: "bg-indigo-700 text-white",
  dark: "bg-neutral-800 text-white",
  steel: "bg-zinc-400 text-black",
  fairy: "bg-rose-300 text-black",
};

export function typeBadgeClass(type: string): string {
  return (
    TYPE_CLASSES[type.toLowerCase()] ||
    "bg-gray-200 text-gray-800 border border-gray-300"
  );
}
