import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import Post from "paginas/Post";
import Menu from "./componentes/Menu";
import NaoEncontrada from "paginas/NaoEncontrada";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          {/* <Route path="/" element={<Inicio />} /> */}
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
