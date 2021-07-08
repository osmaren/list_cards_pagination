import "./styles.css";

function CharCard({ char: { name, image, status, species, gender } }) {
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
