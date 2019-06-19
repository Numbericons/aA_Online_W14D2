import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestAPokemon } from '../../actions/pokemon_actions';
import { selectItemsByIds } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];

  return {pokemon: pokemon,items: selectItemsByIds(state, pokemon.item_ids || [])};
  // return {pokemon: pokemon};
};

const mapDispatchToProps = (dispatch) => ({
  requestAPokemon: (id) => dispatch(requestAPokemon(id))
});

const connection = connect(mapStateToProps, mapDispatchToProps);
const PokemonDetailContainer = connection(PokemonDetail);
export default PokemonDetailContainer;

