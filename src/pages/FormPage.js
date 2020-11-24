import React, { Component } from "react";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";

class FormPage extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      coat: '',
      size: '',
      location: '',
      

    };
    //  this.hideComponent = this.hideComponent.bind(this)
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.group1);
  };
  render() {
    return (
      <div className="container">
   <form>

<h5>How would you describe yourself socially?</h5>
   <p>
      <label>
        <input name="group1" type="radio" value="1" onClick={this.handleChange}/>
        <span>I'm an extrovert</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" value="2" onClick={this.handleChange}/>
        <span>I'm an introvert</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio"  value="3" onClick={this.handleChange}/>
        <span>Somewhere in between</span>
      </label>
    </p>

    <h5>How much are you able to spend on a dogs monthly expenses?</h5>
   <p>
      <label>
        <input name="group2" type="radio" value="1" onClick={this.handleChange}/>
        <span>$0-499 per month</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group2" type="radio" value="2" onClick={this.handleChange}/>
        <span>$500-999 per month</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group2" type="radio"  value="3" onClick={this.handleChange}/>
        <span>$1000+ per month</span>
      </label>
    </p>

    <h5>Whats your primary reason for getting a dog?</h5>
   <p>
      <label>
        <input name="group3" type="radio" value="1" onClick={this.handleChange}/>
        <span>I want a companion</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group3" type="radio" value="2" onClick={this.handleChange}/>
        <span>I want a dog for protection</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group3" type="radio"  value="3" onClick={this.handleChange}/>
        <span>I want a service dog</span>
      </label>
    </p>
   
    <h5>Have you ever lived with a dog before?</h5>
   <p>
      <label>
        <input name="group4" type="radio" value="1" onClick={this.handleChange}/>
        <span>Yes, I've owned a dog before</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group4" type="radio" value="2" onClick={this.handleChange}/>
        <span>Yes, I've shared responsibility of a dog before</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group4" type="radio"  value="3" onClick={this.handleChange}/>
        <span>Nope, this will be my first time</span>
      </label>
    </p>

    <h5>Which would be your biggest concern as a dog owner</h5>
   <p>
      <label>
        <input name="group5" type="radio" value="1" onClick={this.handleChange}/>
        <span>Barking</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group5" type="radio" value="2" onClick={this.handleChange}/>
        <span>House training</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group5" type="radio"  value="3" onClick={this.handleChange}/>
        <span>Aggressive tendencies</span>
      </label>
    </p>

    <h5>Would you prefer to have a large or small dog?</h5>
   <p>
      <label>
        <input name="size" type="radio" value="small" onClick={this.handleChange}/>
        <span>Go big or go home</span>
      </label>
    </p>
    <p>
      <label>
        <input name="size" type="radio" value="medium" onClick={this.handleChange}/>
        <span>Smaller would be easier for me</span>
      </label>
    </p>
    <p>
      <label>
        <input name="size" type="radio"  value="large" onClick={this.handleChange}/>
        <span>No preference</span>
      </label>
    </p>

    <h5>Does your dog need to get along with kids?</h5>
   <p>
      <label>
        <input name="group7" type="radio" value="1" onClick={this.handleChange}/>
        <span>Yes, I have one or more</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group7" type="radio" value="2" onClick={this.handleChange}/>
        <span>Kids? I am never around them</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group7" type="radio"  value="3" onClick={this.handleChange}/>
        <span>Maybe, I might have them in the future</span>
      </label>
    </p>

    <h5>Whats your dream dog date?</h5>
   <p>
      <label>
        <input name="group8" type="radio" value="1" onClick={this.handleChange}/>
        <span>Netflix n' chill with my dog and a white claw</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group8" type="radio" value="2" onClick={this.handleChange}/>
        <span>An 8 mile scenic hike on a trail with a view</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group8" type="radio"  value="3" onClick={this.handleChange}/>
        <span>Going to the dog park where we can both socialize</span>
      </label>
    </p>

    <h5>How many times a day would you and your dog ideally go on a walk?</h5>
   <p>
      <label>
        <input name="group9" type="radio" value="1" onClick={this.handleChange}/>
        <span>Often, 3-5 times</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group9" type="radio" value="2" onClick={this.handleChange}/>
        <span>Moderate, before and after work, 1-2 times</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group9" type="radio"  value="3" onClick={this.handleChange}/>
        <span>I will mostly let him out in my yard</span>
      </label>
    </p>

    <h5>How would you react if your dog had a small accident on your floor?</h5>
   <p>
      <label>
        <input name="group10" type="radio" value="1" onClick={this.handleChange}/>
        <span>Horrified</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group10" type="radio" value="2" onClick={this.handleChange}/>
        <span>Not ideal but shit happens</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group10" type="radio"  value="3" onClick={this.handleChange}/>
        <span>Happy to train my new friend</span>
      </label>
    </p>

    <h5>Which best describes your living situation?</h5>
   <p>
      <label>
        <input name="group11" type="radio" value="1" onClick={this.handleChange}/>
        <span>A small apartment</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group11" type="radio" value="2" onClick={this.handleChange}/>
        <span>A house with a yard</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group11" type="radio"  value="3" onClick={this.handleChange}/>
        <span>A house with other pets</span>
      </label>
    </p>

    <h5>How attached would you like your dog to be to you?</h5>
   <p>
      <label>
        <input name="group12" type="radio" value="1" onClick={this.handleChange}/>
        <span>We will be together all the time</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group12" type="radio" value="2" onClick={this.handleChange}/>
        <span>Im busy, not too attached</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group12" type="radio"  value="3" onClick={this.handleChange}/>
        <span>A healthy balance</span>
      </label>
    </p>

</form>
    </div>
    );
  }
  //   hideComponent(name) {
  //     console.log(name)
  //     switch(name) {
  //       case "showForm1":
  //         this.setState({showForm1: !this.state.showForm1});
  //         break
  //       case "showForm2":
  //         this.setState({showForm2: !this.state.showForm2})
  //         break
  //       case "showForm3":
  //         this.setState({showForm3: !this.state.showForm3})
  //         break
  //       default:
  //         this.setState({showForm1: !this.state.showForm1})

  //     }
  //   }
  //   render() {
  //     const {showForm1, showForm2, showForm3} = this.state
  //     return (
  //       <div>
  //         <h1>Form</h1>
  //         {showForm1 && <Form1 />}
  //         <hr />
  //         {showForm2 && <Form2 />}
  //         <hr />
  //         {showForm3 && <Form3 />}
  //         <hr />
  //         <div>
  //           <button onClick={() => this.hideComponent("showForm1")}>
  //             Click to hide Form1 component
  //           </button>
  //           <button onClick={() => this.hideComponent("showForm2")}>
  //             Click to hide Form2 component
  //           </button>
  //           <button onClick={() => this.hideComponent("showForm3")}>
  //             Click to hide Form3 component
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
}

export default FormPage;
