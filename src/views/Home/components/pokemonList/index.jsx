import PokemonItem from "./PokemonItem";

export default function PokemonsList({ pokemons }) {
  return (
    <div>
      {pokemons.results?.map((value, index) => {
        return (
          <PokemonItem key={index} {...value} />
        );
      })}
    </div>
  );
}
