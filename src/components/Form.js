import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { type } from 'os';


class Form extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
      whiteM: '',
      whiteF: '',
      blackM: '',
      blackF: '',
      asianM: '',
      asianF: '',
      hispanicLatinM: '',
      hispanicLatinF: '',
      totalM: '',
      totalF: '',
      // Need to pass companyRace into Dashboard component
      companyRace: [],
      // companyM: ['Male', 0, ],
      // companyF: ''

  }}

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    // Error handling for entries less than 0 
    e.preventDefault();

    if (this.state.whiteM < 0 || this.state.whiteF < 0 ||
    this.state.blackM < 0 || this.state.blackF < 0 ||
    this.state.asianM < 0 || this.state.asianF < 0 || 
    this.state.hispanicLatinM < 0 || this.state.hispanicLatinF < 0)
    { alert('Please enter numbers greater than 0')} else if (
    // Error handling for entries that are not numbers as well as empty entries
    parseInt(this.state.whiteM) * parseInt(this.state.whiteF) * parseInt(this.state.blackM) * parseInt(this.state.blackF) * 
    parseInt(this.state.asianM) * parseInt(this.state.asianF) * parseInt(this.state.hispanicLatinM) * parseInt(this.state.hispanicLatinF) * 0 !== 0 
    
    // typeof(this.state.whiteM) !== 'number' || typeof(this.state.whiteF) !== 'number' ||
      // typeof(this.state.blackM) !== 'number' || typeof(this.state.blackF) !== 'number' ||
      // typeof(this.state.asianM) !== 'number' || typeof(this.state.asianF) !== 'number' ||
      // typeof(this.state.hispanicLatinM) !== 'number' || typeof(this.state.hispanicLatinF) !== 'number'

    ) { alert('Please enter numbers for all entries')} else {

    
      // || this.state.whiteF === '' ||
      // this.state.blackM === '' || this.state.blackF === '' ||
      // this.state.asianM === '' || this.state.asianF === '' ||
      // this.state.hispanicLatinM === '' || this.state.hispanicLatinF === ''
      // }
      // this.props.onSubmit(this.state);
      // console.log(this.state);


      // this.state.whiteM === '' || this.state.whiteF === '' ||
      // this.state.blackM === '' || this.state.blackF === '' ||
      // this.state.asianM === '' || this.state.asianF === '' ||
      // this.state.hispanicLatinM === '' || this.state.hispanicLatinF === ''

      // calculate race totals
      let companyTotal = parseInt(this.state.whiteM)+parseInt(this.state.whiteF)+parseInt(this.state.blackM)+parseInt(this.state.blackF)+parseInt(this.state.asianM)+parseInt(this.state.asianF)+parseInt(this.state.hispanicLatinM)+parseInt(this.state.hispanicLatinF)
      let whiteTotal = parseInt(this.state.whiteM)+parseInt(this.state.whiteF)
      let blackTotal = parseInt(this.state.blackM)+parseInt(this.state.blackF)
      let asianTotal = parseInt(this.state.asianM)+parseInt(this.state.asianF)
      let hispanicLatinTotal = parseInt(this.state.hispanicLatinM)+parseInt(this.state.hispanicLatinF)

      // TODO: calculate gender totals
      console.log('this is the company Total ', companyTotal)
      console.log('this is the state ', this.state.whiteF)
      console.log('this is the type of state', typeof(this.state.whiteF))
      //copy state
      const stateCopy = {...this.state};
      // mutate stateCopy
      stateCopy.companyRace.push(
      (Math.floor(whiteTotal/companyTotal*10000)/100), 
      (Math.floor(blackTotal/companyTotal*10000)/100), 
      (Math.floor(asianTotal/companyTotal*10000)/100), 
      (Math.floor(hispanicLatinTotal/companyTotal*10000)/100));
      // stateCopy.companyGender.push() //TODO: Complete push totals
      // update component (Form) state
      this.setState(stateCopy);
      // update App state
      this.props.setSeries(this.state.companyRace);
      // this.props.setPieData(this.state.companyGender);
      console.log("this.props", this.props)
      this.props.routeProps.history.push("/dash")
    }
  }
  
  
  render() {
    return (
      <form>
        White <br/> 
        <input name="whiteM" placeholder= "Male" value={this.state.whiteM} onChange={e => this.change(e)} />
        <input name="whiteF" placeholder= "Female" value={this.state.whiteF} onChange={e => this.change(e)} />
        <br/><br/>
        Black <br/>
        <input name="blackM" placeholder= "Male" value={this.state.blackM} onChange={e => this.change(e)} />
        <input name="blackF" placeholder= "Female" value={this.state.blackF} onChange={e => this.change(e)} />
        <br/><br/>
        Asian <br/> 
        <input name="asianM" placeholder= "Male" value={this.state.asianM} onChange={e => this.change(e)} />
        <input name="asianF" placeholder= "Female" value={this.state.asianF} onChange={e => this.change(e)} />
        <br/><br/>
        Hispanic/Latin <br/>
        <input name="hispanicLatinM" placeholder= "Male" value={this.state.hispanicLatinM} onChange={e => this.change(e)} />
        <input name="hispanicLatinF" placeholder= "Female" value={this.state.hispanicLatinF} onChange={e => this.change(e)} />
        <br/><br/>
        <button onClick={e => this.onSubmit(e)}>Submit</button> 
      </form>
      // <div>          <navbar companyRace = {this.state.companyRace} />
      // </div>
    )
  }
}

export default Form;