import { useContext, useEffect } from "react";
import PokemonsContext from "../../context/pokemons";
import PokemonsList from "./components/pokemonList";

export default function Home() {
  const { getPokemons, pokemons } = useContext(PokemonsContext);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  return (
    <div>
      <PokemonsList pokemons={pokemons} />
    </div>
  );
}
