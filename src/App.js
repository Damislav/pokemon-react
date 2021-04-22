import "./App.css";
import React from "react";

// import Pokedecks from "./componenets/Pokedecks";
import Pokegame from "./componenets/Pokegame";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}

export default App;
