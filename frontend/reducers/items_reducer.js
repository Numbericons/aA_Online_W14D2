import { RECEIVE_A_POKEMON } from '../actions/pokemon_actions'; 
const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_A_POKEMON:
          return Object.assign({}, state, action.pokemon.items);
        default:
            return state;
    }
}

export default itemsReducer;