import React, { Component } from "react";
import Heart from '../images/Heart.png';
import Arrow from '../images/Arrow.png';
import Dot from '../images/Dot.png';
import RecSmall from '../images/rec-small.png';
import RecMed from '../images/rec-medium.png';
import RecLarge from '../images/rec-large.png';




class DogShow extends Component {
  state = {
    dog: {},
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    let key = "rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN";
    let secret = "kfQMxVox4kH2I7A56kwo1JPrJyoRuQEnxWHwfoDc";

    // Call the API
    // This is a POST request, because we need the API to generate a new token for us
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        // Return the response as JSON
        return resp.json();
      })
      .then(function (data) {
        // Log the API data
        console.log("token", data);

        // Return a second API call
        // This one uses the token we received for authentication
        return fetch(`https://api.petfinder.com/v2/animals/${id}`, {
          headers: {
            Authorization: data.token_type + " " + data.access_token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      })
      .then(function (resp) {
        // Return the API response as JSON
        return resp.json();
      })
      .then((data) => {
        // Log the pet data
        console.log("pets", data);
        this.setState({ loading: true, dog: data.animal });
      })

      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
    }

    renderPhoto = () => {
      if (this.state.dog.photos) {
        return this.state.dog.photos[0].large;
      }
  }

  render() {
    return (
      <div className='profile-container'>
        <img id="heart" src={Heart} />
        <img id="arrow" src={Arrow} />
        <div className="basic-info">
          <div className="row valign-wrapper">
          <img className="profile-img" src={this.renderPhoto()} />
          
           <h4>{this.state.dog.name}</h4>
          
        <span>
         <p>{this.state.dog.gender} </p>
          <img id="dot" src={Dot} />
          <p>Size: {this.state.dog.size}</p>
          <img id="dot" src={Dot} />
       <p>Age: {this.state.dog.age}</p>  
       </span>
       </div>       
        </div>
     
      <div className="card" id="personality">
               <h4>Personality: </h4>
               <p>cheerful   <img src={RecLarge} /></p>
               <p>peaceful   <img src={RecMed} /></p>
               <p>cuddly   <img src={RecLarge} /></p>
               <p>loud   <img src={RecSmall} /></p>
        </div>
       <div className="card" id="about">
               <h4>PUT TAGS HERE</h4>
        </div>

         <div className="card" id="location-bio">
               <h4>Shelter Location: </h4>
        </div>
     
       
        
      </div>
    );
  }
}

export default DogShow;
