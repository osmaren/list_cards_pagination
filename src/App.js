import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(
    "https://rickandmortyapi.com/api/character?page=32"
  );

  const previousPage = () => {
    if (next !== null) {
      fetch(`${next}`)
        .then((response) => response.json())
        .then((response) => setNext(response.info.prev))
        .catch((error) => console.log("Error", error));
    }
  };

  const nextPage = () => {
    if (next !== null) {
      fetch(`${next}`)
        .then((response) => response.json())
        .then((response) => setNext(response.info.next))
        .catch((error) => console.log("Error", error));
    }
  };

  useEffect(() => {
    fetch(`${next}`)
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((error) => console.log("Error", error));
  }, [next]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="pages">
          {next !== null && <button onClick={previousPage}>Anterior</button>}
          {next !== null && <button onClick={nextPage}>Próxima</button>}
        </div>
        <Characters characters={characters} />
        <div className="pages">
          <button onClick={previousPage}>Anterior</button>
          <button onClick={nextPage}>Próxima</button>
        </div>
      </header>
    </div>
  );
}

export default App;
