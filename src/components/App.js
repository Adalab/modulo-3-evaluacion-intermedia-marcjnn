import "../style/components/App.scss";

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
      <>
        <header className="header">
          <h1>Mi lista de pokemon</h1>
        </header>
        <main className="main">
          <PokeList data={this.state.pokemons} />
        </main>
      </>
    );
  }
}
export default App;
