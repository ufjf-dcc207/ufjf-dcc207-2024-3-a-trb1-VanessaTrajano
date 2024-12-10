import "./App.css";
import Livro from "./components/Livro";

function App() {
  return (
    <div>
      <h1>Biblioteca React</h1>
      <section>
        <h2>Prateleira de livros de romance</h2>
        <div>
          <Livro capa={""} titulo={"Livro 1"} autor={"Autor 1"} ano={"XXX1"} classificacao={1}/>
          <Livro capa={""} titulo={"Livro 2"} autor={"Autor 2"} ano={"XXX2"} classificacao={2}/>
        </div>
      </section>
      <section>
        <h2>Prateleira de livros de ficção</h2>
        <div>
        <Livro capa={""} titulo={"Livro 3"} autor={"Autor 3"} ano={"XXX3"} classificacao={3}/>
        <Livro capa={""} titulo={"Livro 4"} autor={"Autor 4"} ano={"XXX4"} classificacao={4}/>
        </div>
      </section>
      <section>
        <h2>Prateleira de livros de aventura</h2>
        <div>
        <Livro capa={""} titulo={"Livro 5"} autor={"Autor 5"} ano={"XXX5"} classificacao={3}/>
        <Livro capa={""} titulo={"Livro 6"} autor={"Autor 6"} ano={"XXX6"} classificacao={5}/>
        </div>
      </section>
    </div>
  );
}

export default App;
