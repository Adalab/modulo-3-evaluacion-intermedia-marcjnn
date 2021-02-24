// import Item from "./Item";

const PokeList = (props) => {
  console.log(props.data);
  return <>{props.data[0].name}</>;
};

export default PokeList;
