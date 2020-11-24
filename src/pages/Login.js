import React, { Component } from 'react';

class Login extends Component {
  state = { 
    username: "",
    password: "",
   }

   handleSubmit = (event) => {
     event.preventDefault();
   }
  render() { 
    return ( 
      <div>
        <form></form>
      </div>
     );
  }
}
 
export default Login;
 
