import BackButton from "@/components/backButton";
import { getPokemon } from "@/lib/pokemonApi";
import { typeBadgeClass } from "@/lib/typeStyles";
import { default as Image } from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PokemonDetail({ params }: Props) {
  const pokemon = await getPokemon((await params).id);
  console.log(pokemon);

  return (
    <div className="flex justify-center mx-auto mt-10">
      <main className="">
        <p className="text-center text-3xl text-gray-600">{`#${String(
          pokemon.id
        ).padStart(3, "0")}`}</p>

        <Image
          src={pokemon.image}
          width={400}
          height={400}
          alt={`name image`}
          className="bg-gray-200 rounded-lg"
        />
        <h2 className="text-5xl text-center font-semibold my-2 mb-4">
          {pokemon.name}
        </h2>

        <div className="flex flex-col gap-2 text-3xl">
          <div className="flex items-center  gap-6">
            <h4 className="mr-8">Height :</h4>
            <div>{pokemon.height / 10}m</div>
          </div>
          <div className="flex items-center  gap-6">
            <h4 className="mr-8">Weight :</h4>
            <div>{pokemon.weight / 10}kg</div>
          </div>
          <div className="flex items-center  gap-6">
            <h4 className="mr-8">Type :</h4>
            {pokemon.types.map((t: string) => (
              <span
                key={t}
                className={`px-3 py-1 rounded-md capitalize ${typeBadgeClass(
                  t
                )}`}
              >
                {t}
              </span>
            ))}
            {/* {pokemon.types} */}
          </div>
          <div className="flex items-center  gap-6">
            <h4 className="mr-8">Ability :</h4>

            {pokemon.ability}
          </div>
        </div>
        <BackButton />
      </main>
    </div>
  );
}
