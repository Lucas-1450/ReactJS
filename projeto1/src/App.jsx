import Titulo from "./Titulo"

function App() {
  return (
  <div>
    <h1>Olá Mundo!</h1>
    <Titulo nome = "Lucas Melo" anonascimento={1996} />
    <Titulo nome = "Luanna Souza" anonascimento={1998} />
    <Titulo nome = "Heloisa Alves" anonascimento={2019} />
    <Titulo anonascimento={1946} />
  </div>
  )
}

export default App