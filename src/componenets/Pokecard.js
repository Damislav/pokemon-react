import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let padToThree = (number) => {
  return number <= 999 ? `00${number}`.slice(-3) : number;
};
class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title"> {this.props.name}</h1>
        <div className="pokecard-image">
          <img alt={this.props.name} src={imgSrc} />
        </div>
        <div className="Pokecard-title">Type : {this.props.type}</div>
        <div className="Pokecard-title">Type : {this.props.exp}</div>
      </div>
    );
  }
}
export default Pokecard;
