import { useContext, useState, useEffect, useLayoutEffect } from "react";
import PokemonsContext from "../../context/pokemons";
import { Link } from "react-router-dom";
import "./styleSearch.css"


export default function Home() {
  const [searchPokemon, setSerchPokemon] = useState("");
  const { getPokemons, pokemons } = useContext(PokemonsContext);

  useEffect(()=>{
    getPokemons()
  },[])

  const handleSearchPokemon = ({ target: { value } }) => {
    return setSerchPokemon(value);
  };

  const resultMap = pokemons.results?.map((value) => {
    return value.name;
  });
  console.log(resultMap)
  return (
    <div className="search-container">
      <label>
        <input
          type="search"
          value={searchPokemon}
          onChange={handleSearchPokemon}
          className="input-search"
        />
      </label>
      <button onClick={(()=>{
      resultMap?.filter((value)=>{
     return value.includes(searchPokemon)
    })
   })} className="button-search">
        <Link to={`/pokemon/${searchPokemon}`} className="link-search">Search</Link>
      </button>
    </div>
  );
}
