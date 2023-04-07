import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import PokemonDetail from "../views/PokemonDetail";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />}/>
    </Routes>
  );
}