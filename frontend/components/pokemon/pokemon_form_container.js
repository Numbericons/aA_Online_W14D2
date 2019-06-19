import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import {createAPokemon} from '../../actions/pokemon_actions';


const mapStateToProps = (state) => {
    return {
      errors: state.errors
    }
}

const mapDispatchToProps = dispatch => ({
    createPokemon: (pokemon) => dispatch(createAPokemon(pokemon))
});

const connection = connect(mapStateToProps, mapDispatchToProps);
const PokemonFormContainer = connection(PokemonForm);
export default PokemonFormContainer;