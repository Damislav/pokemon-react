import React, { Component } from "react";
import Pokedecks from "./Pokedecks";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 4,
        name: "Charmander",
        type: "fire",
        exp: 22,
      },
      {
        id: 7,
        name: "Squirtle",
        type: "water",
        exp: 42,
      },
      {
        id: 11,
        name: "Metapod",
        type: "fire",
        exp: 62,
      },
      {
        id: 7,
        name: "Squirtle",
        type: "water",
        exp: 52,
      },
      {
        id: 11,
        name: "Metapod",
        type: "fire",
        exp: 32,
      },
      {
        id: 12,
        name: "Butterfree",
        type: "water",
        exp: 52,
      },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIndx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIndx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);

    return (
      <div>
        <Pokedecks pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedecks pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
