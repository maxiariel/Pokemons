import { useState } from "react";
import PokemonsContext from ".";
import ApiCall from "../../api";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [imgPokemon, setImgPokemon] = useState({});

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

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("Id not found");
    try {
      const resultPokemonDetail = await ApiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(resultPokemonDetail);
      setImgPokemon(resultPokemonDetail.sprites)
    } catch (error) {
      setPokemonDetail({});
    }
  };

  return (
    <PokemonsContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        imgPokemon,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
