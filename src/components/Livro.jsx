import "./Livro.css";

function Livro({capa, titulo, autor, ano, classificacao}) {
  return (
    <div className="livro-container">
      <img src={capa} alt={`Capa do livro ${titulo}`} />
          <div>
            <h3>{titulo}</h3>
            <p>Autor: {autor}</p>
            <p>Ano de publicação: {ano}</p>
            <p>Classificação: {"★".repeat(classificacao)}</p>
          </div>
    </div>
  );
}

export default Livro;
