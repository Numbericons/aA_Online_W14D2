import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
    this.showPokemon = this.showPokemon.bind(this);
    this.showItems = this.showItems.bind(this);
  }

  componentDidMount () {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
      if (prevProps.match.params.pokemonId != this.props.match.params.pokemonId) {
        this.props.requestAPokemon(this.props.match.params.pokemonId)
      }
  }

  showItems() {
    let items = this.props.items;
    let pkmn = this.props.pokemon;
    if (this.props.items.length !== 0) {
      return <section>
                <ul id="item-box">
                  {items.map((item) => {
                    return <li key={item.id}><Link to={`/pokemon/${pkmn.id}/item/${item.id}`}><img className="item-img" src={item.image_url}/></Link></li>                  
                  })}
                  <li>
                  </li>
                </ul>
                <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
              </section>
    }
    return ""
  }

  showPokemon() {
    let pkmn = this.props.pokemon;
    if (pkmn.poke_type) {
      return <div>
              <img src={pkmn.image_url} />
              <h1>{pkmn.name}</h1>
              <ul>
                <li>Type: {pkmn.type}</li>
                <li>Attack: {pkmn.attack}</li>
                <li>Defense: {pkmn.defense}</li>
                <li>Moves: {pkmn.moves.join(", ")}</li>
              </ul>
              {this.showItems()}

            </div>
    }
    return 'Loading...'
  }

  render() {
    if (!this.props.pokemon) return null;
    return <section>
            {this.showPokemon()}
          </section>
  }
}



export default PokemonDetail

    