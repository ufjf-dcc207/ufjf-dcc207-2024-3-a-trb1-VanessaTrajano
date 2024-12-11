import "./Estante.css";
import Livro from "./Livro";

function Estante({ genero, listaLivros }) {
  return (
    <div className="estante-container">
      <h2>Estante de livros de {genero}</h2>
      <div>
        {listaLivros.map(livro => (
            <Livro
            capa={livro.img}
            titulo={livro.titulo}
            autor={livro.autor}
            ano={livro.ano}
            classificacao={livro.classificacao}
            link={livro.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Estante;
