import { Component } from "react";
import CharCard from "../CharCard";
import "./styles.css"

class Characters extends Component {
  render() {
    const { characters } = this.props;

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
  }
}

export default Characters;
