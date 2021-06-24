import React from "react";
import { mockPokemonData } from "./../mock/pokeData.js";

export default function PokeCard() {
  return (
    <div>
      <a href={mockPokemonData.video} target="_blanck">
        <h1>{mockPokemonData.name}</h1>
        <img
          src={mockPokemonData.sprites.front_default}
          alt={mockPokemonData.name}
        />
        <img
          src={mockPokemonData.sprites.front_shiny}
          alt={mockPokemonData.name}
        />
      </a>
    </div>
  );
}
