import "../style/App.scss";

import React from "react";
import PokeList from "./PokeList";

import data from "../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <PokeList data={data}/>
      </main>
    );
  }
}
export default App;
