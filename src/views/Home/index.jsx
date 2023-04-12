import { useContext, useState } from "react";
import PokemonsContext from "../../context/pokemons";
import "./styleSearch.css";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
import SearchButton from "./components/SearchButton/SearchButton";

export default function Home() {
  const [searchPokemon, setSerchPokemon] = useState("");
  const { pokemons } = useContext(PokemonsContext);

  const handleSearchPokemon = ({ target: { value } }) => {
    return setSerchPokemon(value);
  };

  const resultMap = pokemons.results?.map((value) => {
    return value?.name;
  });

  const handleSearchClick = () => {
    resultMap?.filter((value) => {
      return value?.includes(searchPokemon);
    });
  };

  return (
    <div className="search-container">
      <SearchPokemon onValue={searchPokemon} onSearch={handleSearchPokemon} />
      <SearchButton onValue={searchPokemon} onSearchClick={handleSearchClick} />
    </div>
  );
}
