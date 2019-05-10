import React, { Component } from 'react';
import './App.css';
import googleGender from './components/GoogleGender'
import Test from './components/Test'
import Form from './components/Form'

class App extends Component {
  onSubmit = fields => {
    console.log("App Component received: ", fields);
  };

  render() {  
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    );
  }
}


export default App;
