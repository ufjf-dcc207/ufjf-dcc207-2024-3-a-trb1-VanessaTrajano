import "./App.css";
import Estante from "./components/Estante";

const livros = [
  {
    img: "",
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano: "1605",
    classificacao: 4,
    link: "",
    genero: "Aventura", // aventura ou ficção
  }, 
  {
    img: "",
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    ano: "1813",
    classificacao: 5,
    link: "",
    genero: "Romance",
  }, 
  {
    img: "",
    titulo: "1984",
    autor: "George Orwell",
    ano: "1949",
    classificacao: 5,
    link: "",
    genero: "Ficção",
  }, 
  {
    img: "",
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    ano: "1847",
    classificacao: 4,
    link: "",
    genero: "Romance",
  }, 
  {
    img: "",
    titulo: "Moby Dick",
    autor: "Herman Melville",
    ano: "1851",
    classificacao: 4,
    link: "",
    genero: "Aventura",
  }, 
  {
    img: "",
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    ano: "1866",
    classificacao: 5,
    link: "",
    genero: "Ficção",
  }, 
  {
    img: "",
    titulo: "O Retrato de Dorian Gray",
    autor: "Oscar Wilde",
    ano: "1890",
    classificacao: 4,
    link: "",
    genero: "Ficção",
  }, 
  {
    img: "",
    titulo: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald",
    ano: "1925",
    classificacao: 5,
    link: "",
    genero: "Ficção", // ficção ou romance
  }, 
  {
    img: "",
    titulo: "Anna Karenina",
    autor: "Liev Tolstói",
    ano: "1877",
    classificacao: 5,
    link: "",
    genero: "Romance",
  }, 
  {
    img: "",
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    ano: "1818",
    classificacao: 5,
    link: "",
    genero: "Ficção",
  }, 
  {
    img: "",
    titulo: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
    ano: "1844",
    classificacao: 5,
    link: "",
    genero: "Aventura", // aventura ou ficção
  }, 
  {
    img: "",
    titulo: "O Apanhador no Campo de Centeio",
    autor: "J.D. Salinger",
    ano: "1951",
    classificacao: 4,
    link: "",
    genero: "Ficção",
  }, 
  {
    img: "",
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    ano: "1967",
    classificacao: 5,
    link: "",
    genero: "Romance", // romance ou ficção
  }, 
  {
    img: "",
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: "1899",
    classificacao: 5,
    link: "",
    genero: "Romance",
  }, 
  {
    img: "",
    titulo: "Grande Sertão: Veredas",
    autor: "Guimarães Rosa",
    ano: "1956",
    classificacao: 5,
    link: "",
    genero: "Romance",
  }, 
  {
    img: "",
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    ano: "1881",
    classificacao: 5,
    link: "",
    genero: "Romance",
  }, 
  {
    img: "",
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    ano: "1938",
    classificacao: 5,
    link: "",
    genero: "Ficção",
  }, 
]

function App() {
  return (
    <div>
      <h1>Biblioteca React</h1>
      <Estante genero={"Aventura"} listaLivros={livros}/>
      {/* <Estante genero={"Romance"} listaLivros={livros}/>
      <Estante genero={"Ficção"} listaLivros={livros}/> */}
    </div>
  );
}

export default App;
