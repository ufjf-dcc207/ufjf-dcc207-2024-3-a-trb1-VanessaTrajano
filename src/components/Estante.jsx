import "./Estante.css";
import Livro from "./Livro";

function Estante({ genero, listaLivros }) {
  return (
    <div className="estante-container">
      <h2>Estante de livros de {genero}</h2>
      <Livro
        capa={""}
        titulo={"Livro 1"}
        autor={"Autor 1"}
        ano={"XXX1"}
        classificacao={1}
        link={"link1"}
      />
    </div>
  );
}

export default Estante;
