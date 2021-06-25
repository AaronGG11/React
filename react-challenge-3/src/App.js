import React, { useEffect, useState } from "react";
import { pokemons } from "./mock/mockedData";
import CardItem from "./components/CardItem";
import "./styles.css";

function FilterPokemon(pokemons, nombre) {
  const result = pokemons.filter(function (poke) {
    return poke.name === nombre;
  });

  return result;
}

export default function App() {
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [showCard, setShowCard] = useState(false);

  console.log("nombre: " + nombre);
  console.log("pokemon: " + pokemon);

  useEffect(() => {
    const aux = FilterPokemon(pokemons, nombre);

    if (aux == "") {
      setPokemon(null);
      setShowCard(false);
    } else {
      setPokemon(aux[0]);
      setShowCard(true);
    }
  }, [nombre]);

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <form>
        <input
          type="text"
          placeholder="Type the pokemon's name here"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </form>
      <div className="cards">
        {showCard ? (
          <CardItem name={pokemon.name} sprite={pokemon.sprite} />
        ) : (
          <h1>No</h1>
        )}
      </div>
    </div>
  );
}
