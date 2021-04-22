import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokidecks.css";
class Pokedecks extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className=" Pokedecks-winner">Winning Hand</h1>;
    } else {
      title = <h1 className=" Pokedecks-loser">Loser Hand</h1>;
    }
    return (
      <div className="Pokedecks">
        <h1>Pokidex</h1>
        <div className="Pokedex-cards">
          <h4>Total exp : {this.props.exp}</h4>
          {title}
          {this.props.pokemon.map((pokemon) => {
            return (
              <Pokecard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                exp={pokemon.exp}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Pokedecks;
