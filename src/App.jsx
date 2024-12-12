import "./App.css";
import Estante from "./components/Estante";
import * as images from "./assets"

const livros = [
  {
    img: images.domQuixote,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano: "1605",
    classificacao: 4,
    link: "https://amzn.to/3ZM6vf1",
    genero: "Aventura",
  }, 
  {
    img: images.orgulhoEPreconceito,
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    ano: "1813",
    classificacao: 5,
    link: "https://amzn.to/3ZtiQn3",
    genero: "Romance",
  }, 
  {
    img: images.l1984,
    titulo: "1984",
    autor: "George Orwell",
    ano: "1949",
    classificacao: 5,
    link: "https://amzn.to/4fgjdHs",
    genero: "Ficção",
  }, 
  {
    img: images.oMorroDosVentosUivantes,
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    ano: "1847",
    classificacao: 4,
    link: "https://amzn.to/3DaO76J",
    genero: "Romance",
  }, 
  {
    img: images.mobyDick,
    titulo: "Moby Dick",
    autor: "Herman Melville",
    ano: "1851",
    classificacao: 4,
    link: "https://amzn.to/3OPujrV",
    genero: "Aventura",
  }, 
  {
    img: images.crimeECastigo,
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    ano: "1866",
    classificacao: 5,
    link: "https://amzn.to/4fe6DIJ",
    genero: "Ficção",
  }, 
  {
    img: images.oRetratoDeDorianGray,
    titulo: "O Retrato de Dorian Gray",
    autor: "Oscar Wilde",
    ano: "1890",
    classificacao: 4,
    link: "https://amzn.to/3ZOGwDE",
    genero: "Ficção",
  }, 
  {
    img: images.oGrandeGatsby,
    titulo: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald",
    ano: "1925",
    classificacao: 5,
    link: "https://amzn.to/4g6JARt",
    genero: "Romance",
  }, 
  {
    img: images.annaKariemima,
    titulo: "Anna Karenina",
    autor: "Liev Tolstói",
    ano: "1877",
    classificacao: 5,
    link: "https://amzn.to/3D80dh1",
    genero: "Romance",
  }, 
  {
    img: images.frankenstein,
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    ano: "1818",
    classificacao: 5,
    link: "https://amzn.to/41vRcsi",
    genero: "Ficção",
  }, 
  {
    img: images.oCondeDeMonteCristo,
    titulo: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
    ano: "1844",
    classificacao: 5,
    link: "https://amzn.to/3ZA3uNk",
    genero: "Aventura",
  }, 
  {
    img: images.oApanhadorNoCampoDeCenteio,
    titulo: "O Apanhador no Campo de Centeio",
    autor: "J.D. Salinger",
    ano: "1951",
    classificacao: 4,
    link: "https://amzn.to/4fbrxrP",
    genero: "Ficção",
  }, 
  {
    img: images.cemAnosDeSolidao,
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    ano: "1967",
    classificacao: 5,
    link: "https://amzn.to/4gbp2Hg",
    genero: "Romance",
  }, 
  {
    img: images.domCasmurro,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: "1899",
    classificacao: 5,
    link: "https://amzn.to/4grIL5i",
    genero: "Romance",
  }, 
  {
    img: images.grandeSertaoVeredas,
    titulo: "Grande Sertão: Veredas",
    autor: "Guimarães Rosa",
    ano: "1956",
    classificacao: 5,
    link: "https://amzn.to/3D8sJyN",
    genero: "Romance",
  }, 
  {
    img: images.memoriasPostumasDeBrasCubas,
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    ano: "1881",
    classificacao: 5,
    link: "https://amzn.to/4fhxJyL",
    genero: "Romance",
  }, 
  {
    img: images.vidasSecas,
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    ano: "1938",
    classificacao: 5,
    link: "https://amzn.to/49yPjwS",
    genero: "Ficção",
  }, 
]

function App() {
  return (
    <div>
      <h1>Biblioteca React</h1>
      <Estante genero={"Aventura"} listaLivros={livros}/>
      <Estante genero={"Romance"} listaLivros={livros}/>
      <Estante genero={"Ficção"} listaLivros={livros}/>
    </div>
  );
}

export default App;
