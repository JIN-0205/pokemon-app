import { PokemonListItem, PokemonSummary, PokemonType } from "@/types";

export const getFirstGen = async (): Promise<PokemonSummary[]> => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data: { results: PokemonListItem[] } = await res.json();

  return data.results.map(({ name, url }) => {
    const id = Number(url.split("/").filter(Boolean).pop());
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return { id, name, image };
  });
};

export const getPokemon = async (idOrName: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Pokemon: ${idOrName}`);
  }

  const data = await res.json();
  console.log(data);

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    height: data.height,
    weight: data.weight,
    types: data.types.map((t: PokemonType) => t.type.name),
    ability: data.abilities[0].ability.name,
  };
};
