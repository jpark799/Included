import React, { Component } from 'react';
import '../App.css';
import googleGender from './GoogleGender'
import Test from './Test'
import Form from './Form'
import RaceChart from './Dashboard/RaceChart';

class App extends Component {
  onSubmit = fields => {
    console.log("App Component received: ", fields);
  };

  render() {  
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        <RaceChart/>
      </div>

    );
  }
}


export default App;
