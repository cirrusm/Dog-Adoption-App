import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  state = {  }

  componentDidMount() {
    let key = 'rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN'
let secret = 'kfQMxVox4kH2I7A56kwo1JPrJyoRuQEnxWHwfoDc'
let org ="RI77"
let status= "adoptable"
let size="medium"
let location = 92625
let goodWithDogs = "true"
let goodWithChildren = "false"
let age = 'baby'
let coat = ''

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
	return fetch('https://api.petfinder.com/v2/animals?limit=5&type=dog&location=' + location + '&good_with_dogs=' + goodWithDogs + '&size=' + size + '&good_with_children=' + goodWithChildren + '&age=' + age + '&coat=' + coat,  {
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
  }
  render() { 
    return ( 
      <div>
        <h1>This is the home page</h1>
        <Link to = '/formpage'>Take Survey</Link>

      </div>
     );
  }
}
 
export default Home;
  
  
  // fetchDog = () =>{
  //   let API_key = 'rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN'
  //   let API_Call = "//api.petfinder.com/v2/animals/"
  //   let API_Token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJycWdMY0xhTzhaU2pOSkRNZHF5MWkxOWEzcVpCckRWQnJjR0hIV0YzNjZDMzRSdEZKTiIsImp0aSI6IjUyOWJkZWMyZDU5MWY4MWEzNTZlYzdjODkzNWE1YzY2ZWVmOGQ0MDcyNDE5MWRkYjZhMzJjNzIxZWZjMjM3ZDAyYzEyYjhmNmExMjBhZDJkIiwiaWF0IjoxNjA2MTc2OTk1LCJuYmYiOjE2MDYxNzY5OTUsImV4cCI6MTYwNjE4MDU5NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.lKyNdHdrA7kdqx-87pU_hnsLSMOKMyevImjuS3wEz6uBbZ5mhZRRkgRr6J1LgFV29RUFe1Kn6bgR96dxuOhgYf74VPOhRL5_S4LBnmYRfuYMyrumwDPcKiiEKLjlNf7bcgLJRmMu-9AsJpOy2KgZwrpdQipq9z7rrGGZHEAyFqfIHtfT_bCyfIicfuFncYZyJras5bBKOqhY6azKtp_cHH_UqTbxlkPFBY99u0dW_AvW4LgzVtDjCkUabn289AvQJa2VWYH5z-upfT3UFNe1aBSXaKWc0wjgYAMNcAmPWrJCwjtmhMQtU3_6RYlGG4lo_mWMtJaHqwmcAAwrq0jtxA"

  // }
  // curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJycWdMY0xhTzhaU2pOSkRNZHF5MWkxOWEzcVpCckRWQnJjR0hIV0YzNjZDMzRSdEZKTiIsImp0aSI6IjUyOWJkZWMyZDU5MWY4MWEzNTZlYzdjODkzNWE1YzY2ZWVmOGQ0MDcyNDE5MWRkYjZhMzJjNzIxZWZjMjM3ZDAyYzEyYjhmNmExMjBhZDJkIiwiaWF0IjoxNjA2MTc2OTk1LCJuYmYiOjE2MDYxNzY5OTUsImV4cCI6MTYwNjE4MDU5NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.lKyNdHdrA7kdqx-87pU_hnsLSMOKMyevImjuS3wEz6uBbZ5mhZRRkgRr6J1LgFV29RUFe1Kn6bgR96dxuOhgYf74VPOhRL5_S4LBnmYRfuYMyrumwDPcKiiEKLjlNf7bcgLJRmMu-9AsJpOy2KgZwrpdQipq9z7rrGGZHEAyFqfIHtfT_bCyfIicfuFncYZyJras5bBKOqhY6azKtp_cHH_UqTbxlkPFBY99u0dW_AvW4LgzVtDjCkUabn289AvQJa2VWYH5z-upfT3UFNe1aBSXaKWc0wjgYAMNcAmPWrJCwjtmhMQtU3_6RYlGG4lo_mWMtJaHqwmcAAwrq0jtxA" https://api.petfinder.com/v2/animals?type=dog&page=1