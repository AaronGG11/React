const ValidatePokemon = (pokemon_original, pokemon_result) => {
  return (
    pokemon_original.name === pokemon_result.name &&
    pokemon_original.sprites.front_default ===
      pokemon_result.sprites.front_default &&
    pokemon_original.sprites.front_shiny ===
      pokemon_result.sprites.front_shiny &&
    pokemon_original.videoLink === pokemon_result.videoLink
  );
};

export { ValidatePokemon };
