import React, { Component } from 'react'

export class CardList extends Component {  
  render() {
    return (
      <div className='card-list'>
        {this.props.monsters.map(monster => 
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        )}
      </div>
    )
  }
}

export default CardList