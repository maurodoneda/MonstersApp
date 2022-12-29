import React, {Component} from 'react'
import './search-box-style.css'

export const SearchBox = (props) => {
    return (
        <div>
            <input className={props.className} type='search' placeholder='search'
                   onChange={props.onChangeHandler}/>
        </div>
    )
}

export default SearchBox
