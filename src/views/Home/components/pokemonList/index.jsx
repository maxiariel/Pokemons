export default function PokemonsList({ pokemons }) {
  console.log(pokemons);
  return (
    <div>
      {pokemons?.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.name}</p>
          </div>
        );
      })}
    </div>
  );
}
