import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState({});
  const [atual, setAtual] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const previousPage = () => setAtual(data.prev);
  const nextPage = () => setAtual(data.next);

  useEffect(() => {
    fetch(`${atual}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.info);
        setCharacters(response.results);
      })
      .catch((error) => console.log("Error", error));
  }, [atual]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="pages">
          {data.prev !== null && (
            <button onClick={previousPage}>Anterior</button>
          )}
          {data.next !== null && <button onClick={nextPage}>Próxima</button>}
        </div>
        <Characters characters={characters} />
        <div className="pages">
          {data.prev !== null && (
            <button onClick={previousPage}>Anterior</button>
          )}
          {data.next !== null && <button onClick={nextPage}>Próxima</button>}
        </div>
      </header>
    </div>
  );
}

export default App;
