import "../style/App.scss";

import React from "react";
import PokeList from "./PokeList";

import data from "../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: data };
  }
  render() {
    return (
      <main>
        <PokeList data={this.state.pokemons} />
      </main>
    );
  }
}
export default App;
