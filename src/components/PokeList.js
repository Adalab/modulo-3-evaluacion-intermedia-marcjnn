import "../style/components/PokeList.scss";

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

export default PokeList;
