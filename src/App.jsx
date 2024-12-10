import "./App.css";
import Livro from "./components/Livro";

function App() {
  return (
    <div>
      <h1>Biblioteca React</h1>
      <section>
        <h2>Prateleira de livros de romance</h2>
        <div>
          <Livro />
          <Livro />
        </div>
      </section>
      <section>
        <h2>Prateleira de livros de ficção</h2>
        <div>
          <Livro />
          <Livro />
        </div>
      </section>
      <section>
        <h2>Prateleira de livros de aventura</h2>
        <div>
          <Livro />
          <Livro />
        </div>
      </section>
    </div>
  );
}

export default App;
