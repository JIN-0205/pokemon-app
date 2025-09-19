import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  image: string;
}
const PokemonCard = ({ id, name, image }: Props) => {
  return (
    <Link href={`pokemon/${id}`} prefetch>
      {/* <div className=""> */}
      <Image
        src={image}
        width={500}
        height={500}
        alt={`${name} image`}
        className="bg-gray-200 rounded-lg"
      />
      <p className="text-neutral-700 text-xl ml-3">{`#${String(id).padStart(
        3,
        "0"
      )}`}</p>
      <h3 className="text-2xl ml-3">{name}</h3>
      {/* </div> */}
    </Link>
  );
};

export default PokemonCard;
