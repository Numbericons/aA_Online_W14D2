import React from 'react';
import { withRouter } from 'react-router-dom';

const TYPES = Object.freeze([
    'fire',
    'electric',
    'normal',
    'ghost',
    'psychic',
    'water',
    'bug',
    'dragon',
    'grass',
    'fighting',
    'ice',
    'flying',
    'poison',
    'ground',
    'rock',
    'steel'
  ].sort());

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "bug",
      attack: "",
      defense: "",
      moves: ["","",""]
    };
    this.submitForm = this.submitForm.bind(this);
    this.update = this.update.bind(this);
    this.changeMove = this.changeMove.bind(this);
    this.errorShow = this.errorShow.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    let {attack, defense} = this.state;
    attack = attack === "" ? undefined : Math.floor(Number(this.state.attack));
    defense = defense === "" ? undefined : Math.floor(Number(this.state.defense));
    let pkmn = {
      name: this.state.name,
      image_url: this.state.image_url,
      poke_type: this.state.poke_type,
      attack,
      defense,
      moves: this.state.moves.filter(move => move !== "")
    };
    
    this.props.createPokemon(pkmn).then((newPokemon) => {
        this.props.history.push(`pokemon/${newPokemon.pokemon.id}`);
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  changeMove(idx) {
    return e => {
      let moveArr = [...this.state.moves];
      moveArr[idx] = e.target.value;
      this.setState({ moves: moveArr });
    }
  }

  errorShow() {
    if (this.props.errors.constructor === Array) {
      return <ul>
              {this.props.errors.map((error,i) => <li key={i} className="error">{error}</li>)}
            </ul>
    }
  }
  
  render() {
    return <div>
              {this.errorShow()}
              <form>
                  <input type="text" value={this.state.name} placeholder='Name' onChange={this.update("name")}/>
                  <input type="text" value={this.state.image_url} placeholder='Image URL' onChange={this.update("image_url")}/>
                  <select
                  value={this.state.poke_type}
                  onChange={this.update('poke_type')}
                  >
                    {TYPES.map((type, i) => {
                        return <option key={i} value={type}>{type}</option>
                    })}
                  </select>

                  <input type="number" value={this.state.attack} placeholder='Attack' onChange={this.update("attack")}/>
                  <input type="number" value={this.state.defense} placeholder='Defense' onChange={this.update("defense")}/>
                  <input type="text" value={this.state.moves[0]} placeholder='Move 1' onChange={this.changeMove(0)} />
                  <input type="text" value={this.state.moves[1]} placeholder='Move 2' onChange={this.changeMove(1)} />
                  <input type="text" value={this.state.moves[2]} placeholder='Move 3' onChange={this.changeMove(2)} />
                  <button onClick={this.submitForm}>Create Pokemon</button>
              </form>
          </div> 
  }
}

export default withRouter(PokemonForm);