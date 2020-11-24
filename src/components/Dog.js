import React from 'react'

import { Link } from 'react-router-dom';

function DogCard(props) {
  return (
    <Link to{`/dog/${props.dog._id}`}>
      <div className="card">
        <img className="dogImage" 
          src={props.dog.dogImgUrl}
          alt={props.dog.name} />
        <h2>{props.dog.name}</h2>
        <h3>{props.dog.age}</h3>
      </div>
    </Link>
  )
}

export default DogCard;
