import React, { Component } from 'react'
import './search-box-style.css'

export class SearchBox extends Component {
    
  render() {
    return (
      <div>
        <input className={this.props.className} type ='search' placeholder='search' onChange={this.props.onChangeHandler}/>
      </div>
    )
  }
}

export default SearchBox