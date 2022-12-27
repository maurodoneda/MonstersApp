import React, { Component } from 'react'

export class SearchBox extends Component {
    
  render() {
    return (
      <div>
        <input type ='search' placeholder='search' onChange={this.props.onChangeHandler}/>
      </div>
    )
  }
}

export default SearchBox