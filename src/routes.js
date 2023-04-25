import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
