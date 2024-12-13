import "./Livro.css";

function Livro({capa, titulo, autor, ano, classificacao, link}) {
  return (
    <div className="livro-container">
      <img src={capa} alt={`Capa do livro ${titulo}`} />
          <div className="info-container">
            <h3>{titulo}</h3>
            <p>Autor: {autor}</p>
            <p>Ano de publicação: {ano}</p>
            <p>Classificação: {"★".repeat(classificacao)}</p>
            <p><a href={link}>Compre aqui!</a></p>
          </div>
    </div>
  );
}

export default Livro;
