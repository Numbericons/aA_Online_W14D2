export const fetchAllPokemon = function() {
  return $.ajax({
    method: 'GET',
    url: "/api/pokemons"
  })
}

export const fetchAPokemon = function(id) {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemons/${id}`
  })
}

export const createAPokemon = function(pkmn) {
  return $.ajax({
    method: 'POST',
    url: `/api/pokemons`,
    data: {
      pokemon: {
        name: pkmn.name,
        attack: pkmn.attack,
        defense: pkmn.defense,
        poke_type: pkmn.poke_type,
        moves: pkmn.moves,
        image_url: pkmn.image_url
      }
    }
  })
}