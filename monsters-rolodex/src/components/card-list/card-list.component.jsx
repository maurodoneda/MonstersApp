import React, { Component } from 'react'
import './card-list-styles.css'
import {Card} from "../card/card.component";

export class CardList extends Component {  
  render() {
    return (
      <div className='card-list'>
        {this.props.monsters.map(monster => 
          <Card monster = {monster}/>
        )}
      </div>
    )
  }
}

export default CardList
