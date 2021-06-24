import React from "react";
import { mockPokemonsData } from "./../mock/pokeData";

function RenderItems(props) {
  const items = props.data;
  const list_items = items.map((index) => (
    <li key={index}>
      <div>
        <h1>{index.name}</h1>
        <a href={index.videoLink} target="_blank">
          <img
            src={
              index.sprites.front_default
                ? index.sprites.front_default
                : index.sprites.back_default
            }
          />
        </a>
      </div>
    </li>
  ));

  return <ul style={{ listStyleType: "none" }}>{list_items}</ul>;
}

export default function PokeCards() {
  const Item = () => {
    return <h1>algo</h1>;
  };

  return (
    <div>
      <RenderItems data={mockPokemonsData} />
    </div>
  );
}
