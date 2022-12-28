import React, { Component } from 'react'
import './card-list-styles.css'

export class CardList extends Component {  
  render() {
    return (
      <div className='card-list'>
        {this.props.monsters.map(monster => 
          <div key={monster.id} className ='card-container'>
            <img 
              alt={`monster ${monster.name}`} 
              src={`https://robohash.org/${monster.id}?set=2&size=180x180`} 
            />
            <h1>{monster.name}</h1>
            <h3>{monster.email}</h3>
          </div>
        )}
      </div>
    )
  }
}

export default CardList