import React, { Component } from 'react';
import '../App.css';
import googleGender from './GoogleGender'
import Test from './Test'
import Form from './Form'
import Dashboard from './Dashboard/Dashboard';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={Form } render/>
//       <Route path='/Dashboard' component={Dashboard}/>
//     </Switch>
//   </main>
// )
// const formComponent =  <Form setSeries={this.setSeries} setPieData={this.setPieData} />
 
// const App = () => (
//   <div>
//     <Main/>
//   </div>
// )

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
 
      series: [{
        name: 'US Workforce',
        data: [78,12.3,6.3,17.3]
    },
    {
        name: 'US Software Engineers',
        data: [58.6, 3.8, 35.4, 5.3]
    },
    {
        name: 'Your Company',
        // need to pass in companyRace here.
        data: []
    }],
    // state for pie chart
    pieData: []
  }
}
// should be in Dashboard?? 
  setSeries = companyRaceData => {
    //copy state
    const stateCopy = {...this.state};
    // mutate stateCopy

    console.log('This is race data', companyRaceData)

    stateCopy.series[2].data = (companyRaceData);
    // update app state


    this.setState(stateCopy);
  }

  // define method to pass to Form to update App pieData
  setPieData = companyGenderData => {
      //copy state
      const stateCopy = {...this.state};
      // mutate stateCopy
  
      console.log('This is gender data', companyGenderData)
  
  
      // update app state
  
      stateCopy.pieData = companyGenderData;
      this.setState(stateCopy);
  }

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
      // <div className="App">
      
      // <Form setSeries={this.setSeries} setPieData={this.setPieData} />
      // <Dashboard series={this.state.series} />
      //   {/* <PieChart data={this.state.pieData} /> */}
      // </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={routeProps => <Form setSeries={this.setSeries} setPieData={this.setPieData} routeProps={routeProps} />} />
          <Route path="/dash" render={() => <Dashboard series={this.state.series} pieData={this.state.pieData} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
