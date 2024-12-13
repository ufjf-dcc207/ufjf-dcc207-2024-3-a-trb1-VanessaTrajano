import "./Livro.css";

function Livro({capa, titulo, autor, ano, classificacao, link}) {
  return (
    <div className="livro-container">
      <img src={capa} alt={`Capa do livro ${titulo}`} />
          <div className="info-container">
            <h3>{titulo}</h3>
            <hr />
            <p>Autor: {autor}</p>
            <p>Ano de publicação: {ano}</p>
            <p>Classificação: {"★".repeat(classificacao)}</p>
            <a href={link} target="blank" className="livro-link">Compre aqui!</a>
          </div>
    </div>
  );
}

export default Livro;
