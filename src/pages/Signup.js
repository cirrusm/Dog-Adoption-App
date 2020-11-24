import React, { Component } from 'react';
import UserModel from '../back-end/models/User'

class Signup extends Component {
  state = { 
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',

   }

   handleSubmit = (event) => {
    // event.preventDefault();
    // UserModel.create(this.state)
    // .then(data => {
    //   this.props.history.push('/')
    // })
  }

  handleChange = (event) => {
   
    this.setState({
      [event.target.name] : event.target.value
    })
    console.log(this.state.username)
  }
  render() { 


    return ( 
      <div>
        <h1>Sign Up</h1>
        <form onSubmit = {this.handleSubmit}>
          <div className="formInput">
            <label htmlFor="username" >
              <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              />
            </label>
          </div>

          <div className="formInput">
            <label htmlFor="password" >
              <input
              type="text"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              />
            </label>
          </div>

          <div className="formInput">
            <label htmlFor="email" >
              <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              />
            </label>
          </div>

          <div className="formInput">
            <label htmlFor="firstName" >
              <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              />
            </label>
          </div>

          <div className="formInput">
            <label htmlFor="lastName" >
              <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              />
            </label>
          </div>
          <input type="submit" value= "create account"></input>

        </form>
      </div>
     );
  }
}
 
export default Signup;