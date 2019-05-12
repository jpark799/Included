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
  setSeries = formData => {
    //copy state
    const stateCopy = {...this.state};
    // mutate stateCopy

    // // TODO:  Will need to find way to calculate percents
    // const arrayTotal = stateCopy.series[2].data;
    // const CompanyTotal = (parseInt(arrayTotal[0]));
    // const whitePercent = 0
    // const blackPercent = 0
    // const asianPercent = 0
    // const hispanicLatinPercent = 0
    // console.log('this is the company total ', CompanyTotal)
    // console.log('this is the company array stateCopy.series[2].data ', stateCopy.series[2].data)


    stateCopy.series[2].data.push(...formData);
    // update app state


    this.setState(stateCopy);
  }

  // define method to pass to Form to update App pieData
  setPieData = formData => {}

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
          <Route exact path="/" render={routeProps => <Form setSeries={this.setSeries} routeProps={routeProps} />} />
          <Route path="/dash" render={() => <Dashboard series={this.state.series} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
