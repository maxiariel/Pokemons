import { useState } from "react";
import PokemonsContext from ".";
import ApiCall from "../../api";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [imgPokemon, setImgPokemon] = useState({});
  const [colorPokemon, setColorPokemon] = useState("");
  const [abilitiesPokemon1, setAbilitiesPokemon1] = useState([]);
  const [abilitiesPokemon2, setAbilitiesPokemon2] = useState([]);

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
      setImgPokemon(resultPokemonDetail?.sprites);
      setColorPokemon(resultPokemonDetail?.types[0].type);
      setAbilitiesPokemon1(resultPokemonDetail?.abilities[0].ability.name);
      setAbilitiesPokemon2(resultPokemonDetail?.abilities[1].ability.name);
    } catch (error) {
      setPokemonDetail({});
      setImgPokemon({});
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
        colorPokemon,
        abilitiesPokemon1,
        abilitiesPokemon2,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
