import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" flex justify-center">
      <div>
        <Link href="/" aria-label="Go to home" className="inline-block">
          <Image
            src="https://imguscdn.gamespress.com/cdn/files/PokemonAmerica/2019/07/09125735-7b00e266-d991-41da-9267-843e49ce62a7/Pokemon_Logo.jpg?w=240&mode=max&otf=y&quality=90&format=jpg&bgcolor=white&sky=943c262a0f612e64318817262f0963f21d043f231ba7bf27dea206304c70e2c7"
            width={240}
            height={80}
            alt="Pokémon logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
