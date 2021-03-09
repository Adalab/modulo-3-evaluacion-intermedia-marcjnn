import "../style/components/PokeList.scss";
import PropTypes from "prop-types";

import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const pokeList = props.data.map((pokemon) => {
    return (
      <li key={pokemon.id} id={pokemon.id}>
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return <ul className="pokemons">{pokeList}</ul>;
};

PokeList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PokeList;
