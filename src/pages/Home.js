import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  state = {  }
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