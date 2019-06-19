export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";
import * as Util from '../util/api_util';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveAPokemon = (pokemon) => ({  // have pokemon reducer and item reducer respond to this action
  type: RECEIVE_A_POKEMON,
  pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  Util.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestAPokemon = (id) => (dispatch) => (
  Util.fetchAPokemon(id)
    .then(pokemon => dispatch(receiveAPokemon(pokemon)))  //returns one pokemon and multiple items (pokemon => pokemon.pokemon and pokemon.items)
)

export const createAPokemon = (pkmn) => (dispatch) => (
  Util.createAPokemon(pkmn)
    .then(pokemon => {
      dispatch(receiveAPokemon(pokemon));
      return pokemon;
    }, (errors) => { 

      dispatch(receivePokemonErrors(errors.responseJSON))}) 
)


export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});