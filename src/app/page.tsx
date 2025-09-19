import PokemonList from "@/components/pokemonList";

import { getFirstGen } from "@/lib/pokemonApi";

export default async function Home() {
  const pokemons = await getFirstGen();
  return (
    <div className="">
      <main className=" flex justify-center">
        <PokemonList pokemons={pokemons} />
      </main>
    </div>
  );
}
