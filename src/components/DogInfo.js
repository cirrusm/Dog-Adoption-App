import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function DogInfo(props) {
  return (

    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={props.dog.photos[0].medium} />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <Link to = {`/dog/${props.dog.id}`}>View this dog</Link>
        </div>
      </div>
    </div>
  </div>
    // <li className="card">
    //   <Link to={`/dogs/${props.dog._id}`} className="DogCardLink">
    //     <img 
    //       className="dogCardImg" 
    //       src={props.dog.coverArtUrl} 
    //       alt={props.dog.title} 
    //     />

    //     <img src={props.dog.photos[0].small} />
    //     <p>{props.dog.name}</p>
    //     <p>{props.dog.breed}</p>
    //     <p>{props.dog.age}</p>
    //     <p>{props.dog.size}</p>
    //     <p>{props.dog.tags}</p>
    //     <p>{props.dog.description}</p>
    //   </Link>
     
    
    // </li>
  )
}

export default DogInfo;
