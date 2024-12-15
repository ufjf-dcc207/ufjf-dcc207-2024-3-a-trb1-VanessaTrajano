import "./App.css";
import Estante from "./components/Estante";
import livros from './livros.js'

function App() {
  return (
    <div className="app-container">
      <h1>Biblioteca React</h1>
      <Estante genero={"Aventura"} listaLivros={livros}/>
      <Estante genero={"Romance"} listaLivros={livros}/>
      <Estante genero={"Ficção"} listaLivros={livros}/>
    </div>
  );
}

export default App;
