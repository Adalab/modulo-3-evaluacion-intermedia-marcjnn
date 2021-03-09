import "../style/components/Pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  let bgr = "";
  if (props.pokemon.types.includes("grass")) {
    bgr = "grass";
  } else if (props.pokemon.types.includes("fire")) {
    bgr = "fire";
  } else if (props.pokemon.types.includes("water")) {
    bgr = "water";
  } else {
    bgr = "default";
  }

  const pokeTypes = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} className="pokemon__item">
        {type}
      </li>
    );
  });
  return (
    <article className={`pokemon bgr--${bgr}`}>
      <img
        className="pokemon__img"
        src={props.pokemon.url}
        alt={props.pokemon.name}
      />
      <h2 className="pokemon__name">{props.pokemon.name}</h2>
      <ul className="pokemon__types">{pokeTypes}</ul>
    </article>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
