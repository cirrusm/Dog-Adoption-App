import React from 'react';
import DogCards from '../components/DogCards';
import { Link } from 'react-router-dom';

class IndexPage extends React.Component {
  state = {
    dogs: []
  }




  // renderDogs() {

  //   return this.state.dogs.map((dog, index) => {
  //     <DogCards dog={dog} key={dog._id} />
  //   });
  // }


  render() {
    return(
      <div>
        <DogCards />
      </div>
    );
  };
};

export default IndexPage;
