import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';

// export default const pokemonReducer = () => {
const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon, state);
    case RECEIVE_A_POKEMON:
      // debugger; //pokemon.pokemon = {name:bulbasaur, attack:5, image_url:'bulba.png', items_ids: [1,2,3]}
      return Object.assign({}, state, {[action.pokemon.pokemon.id]: action.pokemon.pokemon});
    default:
      return state;
  }
}

export default pokemonReducer;

/*
state = {
  entities: {
    pokemon: {
      1 => {
        id: 1,
        name: bulbasaur,
        image_url: 'bulba.png'
      }
    }
    items: {

    }
  }
}

*/