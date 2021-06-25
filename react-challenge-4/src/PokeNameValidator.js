import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  const [pokemon, setPokemon] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const [reset, setReset] = useState(false);
  const [showWindow, SetShowWindow] = useState(false);

  const GetPokemon = () => {
    return pokemons[Math.floor(Math.random() * pokemons.length)];
  };

  const ComparePokemonWithName = () => {
    if (pokemon === namePokemon && pokemon !== "") return true;
    else return false;
  };

  useEffect(() => {
    const aux = ComparePokemonWithName();
    if (aux) {
      setReset(!reset);
      setNamePokemon("");
      alert("Correct! Play again?");
    }

    //console.log(aux + " : " + pokemon + " : " + namePokemon);
  }, [namePokemon]);

  useEffect(() => {
    setPokemon(GetPokemon());
  }, [reset]);

  useEffect(() => {
    setPokemon(GetPokemon());
  }, []);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{/** random pokemon name should appear here */}</strong>
      </p>
      <p>{pokemon}</p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        value={namePokemon}
        placeholder="Enter the Pokémon name"
        onChange={(e) => setNamePokemon(e.target.value)}
      />
    </div>
  );
}
