import React, { Component } from 'react';
import Form1 from '../components/Form1'
import Form2 from '../components/Form2'
import Form3 from '../components/Form3'

class FormPage extends Component {
  constructor() {
    super()
  this.state = { 
    name: "React",
    showForm1 : true,
    showForm2: false,
    showForm3: false
   }
   this.hideComponent = this.hideComponent.bind(this)
  }

  hideComponent(name) {
    console.log(name)
    switch(name) {
      case "showForm1":
        this.setState({showForm1: !this.state.showForm1});
        break
      case "showForm2":
        this.setState({showForm2: !this.state.showForm2})
        break
      case "showForm3":
        this.setState({showForm3: !this.state.showForm3})
        break
      default:
        this.setState({showForm1: !this.state.showForm1})
          
    }
  }
  render() { 
    const {showForm1, showForm2, showForm3} = this.state
    return ( 
      <div>
        <h1>Form</h1>
        {showForm1 && <Form1 />}
        <hr />
        {showForm2 && <Form2 />}
        <hr />
        {showForm3 && <Form3 />}
        <hr />
        <div>
          <button onClick={() => this.hideComponent("showForm1")}>
            Click to hide Form1 component
          </button>
          <button onClick={() => this.hideComponent("showForm2")}>
            Click to hide Form2 component
          </button>
          <button onClick={() => this.hideComponent("showForm3")}>
            Click to hide Form3 component
          </button>
        </div>
      </div>
    );
  }
}

 
export default FormPage;