import {Component} from "react";
import './card.styles.css'

export const Card = ({monster}) => {
    const {id, name, email} = monster;

    return (
        <div key={id} className='card-container'>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=2&size=180x180`}
            />
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;
