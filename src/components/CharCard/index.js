import "./styles.css";

function CharCard({ char: { name, image, status, species, gender } }) {
  /*   if (status === "Alive") {
    return (
      <div className="card">
        <label>{name}</label>
        <img className="picture" src={image} alt={name}></img>
      </div>
    );
  } else if (status === "Dead") {
    return (
      <div className="card dead">
        <label>{name}</label>
        <img className="picture" src={image} alt={name}></img>
      </div>
    );
  } else {
    return (
      <div className="card other">
        <label>{name}</label>
        <img className="picture" src={image} alt={name}></img>
      </div>
    );
  } */

  const returnName = () => name.slice(0, 14).concat("...");

  return (
    <div
      className={
        status === "Alive"
          ? "card"
          : status === "Dead"
          ? "card dead"
          : "card other"
      }
    >
      <div>{name.length < 15 ? name : returnName()}</div>
      <img className="picture" src={image} alt={name}></img>
      <label>{status}</label>
      <label>Gender: {gender}</label>
    </div>
  );
}

export default CharCard;
