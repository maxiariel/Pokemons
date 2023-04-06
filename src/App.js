import PokemonProvider from "./context/pokemons/Provider";
import AllRoutes from "./routes";

function App() {
  return (
    <PokemonProvider>
      <AllRoutes />
    </PokemonProvider>
  );
}

export default App;
