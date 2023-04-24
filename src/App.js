import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";

console.log(window.location);

const pagina =
  window.location.pathname === "/" ? (
    <Inicio/>
  ) : (
    <SobreMim/>
  );

function App() {
  return pagina;
}

export default App;
