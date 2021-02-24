import "../style/components/Pokemon.scss";

const Pokemon = (props) => {
  const pokeTypes = props.pokemon.types.map((type, index) => {
    return <li key={index} className="pokemon__item">{type}</li>;
  });
  return (
    <article className="pokemon">
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

export default Pokemon;
