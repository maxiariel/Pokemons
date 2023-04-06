import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
