import "./App.css";
import Estante from "./components/Estante";

function App() {
  return (
    <div>
      <h1>Biblioteca React</h1>
      <Estante genero={"Aventura"} listaLivros={""}/>
      <Estante genero={"Romance"} listaLivros={""}/>
      <Estante genero={"Ficção"} listaLivros={""}/>
    </div>
  );
}

export default App;
