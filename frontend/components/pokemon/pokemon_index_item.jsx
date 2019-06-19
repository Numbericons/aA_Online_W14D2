import React from 'react'
import { Link } from 'react-router-dom';


const PokemonIndexItem = function ({ pkmn }) {
  return <li><Link to={`/pokemon/${pkmn.id}`}><img className="thumbnail" src={pkmn.image_url}/> {pkmn.name} </Link></li>
}


export default PokemonIndexItem;