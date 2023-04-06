import { useState } from "react";
import PokemonsContext from ".";
import ApiCall from "../../api";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const pokemonResults = await ApiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0",
      });
      setPokemons(pokemonResults);
    } catch (error) {
      setPokemons([]);
    }
  };

  return (
    <PokemonsContext.Provider value={{ getPokemons, pokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
}
