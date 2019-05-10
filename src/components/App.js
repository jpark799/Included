import React, { Component } from 'react';
import '../App.css';
import googleGender from './GoogleGender'
import Test from './Test'
import Form from './Form'
import Dashboard from './Dashboard/Dashboard';

class App extends Component {

  // onSubmit = fields => {
  //   console.log("App Component received: ", fields);
  //   let whiteTotal = parseInt(fields.whiteM)+parseInt(fields.whiteF)
  //   let blackTotal = parseInt(fields.blackM)+parseInt(fields.blackF)
  //   let asianTotal = parseInt(fields.asianM)+parseInt(fields.asianF)
  //   let hispanicLatinTotal = parseInt(fields.hispanicLatinM)+parseInt(fields.hispanicLatinF)
  //   let companyRace = [whiteTotal, blackTotal, asianTotal, hispanicLatinTotal]
  //   console.log(companyRace)
  // };
  

  render() {  
    return (
      <div className="App">
        <Form 
        // onSubmit={fields => this.onSubmit(fields)}
        />
        <Dashboard />
      </div>

    );
  }
}


export default App;
