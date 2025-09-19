"use client";

import { PokemonSummary } from "@/types";
import { useEffect, useState } from "react";
import PokemonCard from "./pokemonCard";
import SearchBar from "./searchBar";

interface Props {
  pokemons: PokemonSummary[];
}

const PokemonList = ({ pokemons }: Props) => {
  const [filtered, setFiltered] = useState(pokemons);

  useEffect(() => {
    setFiltered(pokemons);
  }, [pokemons]);

  const handleSearch = (query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setFiltered(pokemons);
      return;
    }
    setFiltered(pokemons.filter((p) => p.name.toLowerCase().includes(q)));
  };
  return (
    <div className="m-4">
      <SearchBar onSearch={handleSearch} />
      <ul className="grid grid-cols-2 gap-y-8 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 max-w-[1280px] 2xl:grid-cols-9">
        {filtered.map((p) => (
          <PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
