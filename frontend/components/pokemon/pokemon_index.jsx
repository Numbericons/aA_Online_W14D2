import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    if (this.props.pokemon.length === 0) {
      return <ul></ul>
    }
    return <div id="pkmn-index">
            <div id="center">
              <Route exact path="/" component={PokemonFormContainer} />
              <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
            </div>
            <ul id="poke-list">
              {this.props.pokemon.map((pkmn) => {
                return <PokemonIndexItem key={pkmn.id} pkmn={pkmn} />
              })}
            </ul>

          </div> 
  }
}

export default PokemonIndex;