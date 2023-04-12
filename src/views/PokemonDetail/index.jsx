import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonsContext from "../../context/pokemons";
import "./style.css";
import "./typeColor.css";

export default function PokemonDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, imgPokemon, colorPokemon, abilitiesPokemon1, abilitiesPokemon2 } =
    useContext(PokemonsContext);

  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);
  return (
    <div className="container-pokemon-detail">
      <div className={`pokemon-detail ${colorPokemon?.name ? colorPokemon?.name + "-card" : undefined}`} >
        <img src={imgPokemon?.front_default} alt={pokemonDetail?.name}
         className={` img-pokemon-detail ${colorPokemon?.name ? colorPokemon?.name : undefined}` }/>
        <div className="container-p-detail">
          <p className="p-pokemon-detail"> Name: <span>{pokemonDetail?.name}</span></p>
          <p className="p-pokemon-detail"> Experience: <span>{pokemonDetail?.base_experience}</span></p>
          <p className="p-pokemon-detail"> Weight: <span>{pokemonDetail?.weight}</span></p>
          <p className="p-pokemon-detail"> Heigth: <span>{pokemonDetail?.height}</span></p>
          <p className="p-pokemon-detail"> Abilities: <span>{abilitiesPokemon1}</span> <span>{abilitiesPokemon2}</span></p>
        </div>
        <button className="button-back">
          <Link to={"/"} className="link-back" >Back Search</Link>
        </button>
      </div>
    </div>
  );
}
