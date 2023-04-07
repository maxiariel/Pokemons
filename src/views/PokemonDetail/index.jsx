import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonsContext from "../../context/pokemons";

export default function PokemonDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, imgPokemon } =
    useContext(PokemonsContext);

  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);

  return (
    <div>
      <img src={imgPokemon.front_default} alt={pokemonDetail?.name} />
      <p> Name: {pokemonDetail?.name}</p>
      <p> Weight: {pokemonDetail?.weight} </p>
      <p> Heigth: {pokemonDetail?.height}</p>
    </div>
  );
}
