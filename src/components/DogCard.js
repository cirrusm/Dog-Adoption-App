import React, { Component } from 'react';

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: {}
          }
    }
// Call the API
// This is a POST request, because we need the API to generate a new token for us
componentDidMount() {

let key = 'rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN'
let secret = 'kfQMxVox4kH2I7A56kwo1JPrJyoRuQEnxWHwfoDc'


// Call the API
// This is a POST request, because we need the API to generate a new token for us
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

	// Log the API data
	console.log('token', data);

	// Return a second API call
	// This one uses the token we received for authentication
	return fetch('https://api.petfinder.com/v2/animals/49876167', {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then(function (data) {

	// Log the pet data
	console.log('pets', data);

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
     this.setState({loading: true})
        fetch("https://api.petfinder.com/v2/animals/49876167")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    dog: data
             })
             
   }  )
}  
    render() {

            
        return (
            <div className='dogInfo'>
                <h1>I am returning something</h1>
                
                        {/* <img className="dogPic" src={this.props.dog.animal.photos[0].large}></img> */}
                        {/* <p>Breed: {this.props.dog.animal.breeds.primary}</p>
                        <p>Gender: {this.props.dog.animal.gender}</p>
                        <p>Size:{this.props.dog.animal.size}</p> */}
                    </div>
        )
    }}

//     render() { 
//         if (this.props.dog){
//             let dogInfo = (
//                     <div className='doginfo'>
//                         <img className="dogPic" src={this.props.dog.animal.photos[0].large}></img>
//                         <p>Gender: {this.props.dog.animal.gender}</p>
//                         <p>Size: {this.props.dog.animal.size}</p>
//                         <p>Good with kids?: {this.props.dog.animal.}</p>
//                         <p>Good with cats?: {this.props.dog.animal.}</p>
//                         <p>Good with other dogs?: {this.props.dog.animal.}</p>
//                         <p>Breed: {this.props.animal.breeds.primary}</p>
//                     </div>
//             )
//       
            
//         );
//     }
// }

export default Dog;