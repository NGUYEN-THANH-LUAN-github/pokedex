import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    let title
    if (this.props.isWinner) {
      title = <h1 style={{ color: '#4caf50' }}>Winning Hand</h1>
    } else {
      title = <h1 style={{ color: '#e91e63' }}>Losing Hand</h1>
    }
    return (
      <div className='Pokedex'>
        {title}

        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex
