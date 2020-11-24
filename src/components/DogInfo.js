import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function DogCard(props) {
  return (
    <li className="DogCard">
      <Link to={`/dogs/${props.dog._id}`} className="DogCardLink">
        <img 
          className="dogCardImg" 
          src={props.dog.coverArtUrl} 
          alt={props.dog.title} 
        />
        <p>{props.dog.name}</p>
        <p>{props.dog.breed}</p>
        <p>{props.dog.age}</p>
        <p>{props.dog.size}</p>
        <p>{props.dog.tags}</p>
        <p>{props.dog.description}</p>
      </Link>
     
    
    </li>
  )
}

export default GameCard;
