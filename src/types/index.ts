export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonSummary = {
  id: number;
  name: string;
  image: string;
};

export type PokemonDetail = {
  id: string;
  name: string;
  image: string;
  height: number;
  weight: number;
  types: PokemonType;
  ability: string;
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
