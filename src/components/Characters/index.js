import CharCard from "../CharCard";
import "./styles.css";

const Characters = ({ characters }) => {
  return (
    <div>
      <h3>Meus personagens</h3>
      <div className="container">
        {characters.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
