import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Form extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
      renderFormStatus: true,
      renderGraphButton: false, 
      whiteM: '',
      whiteF: '',
      blackM: '',
      blackF: '',
      asianM: '',
      asianF: '',
      hispanicLatinM: '',
      hispanicLatinF: '',
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
    e.preventDefault();
    this.state.renderFormStatus = false;
    this.state.renderGraphButton = true;
    // this.props.onSubmit(this.state);
    console.log(this.state);
    // calculate race totals
    let whiteTotal = parseInt(this.state.whiteM) + parseInt(this.state.whiteF)
    let blackTotal = parseInt(this.state.blackM)+parseInt(this.state.blackF)
    let asianTotal = parseInt(this.state.asianM)+parseInt(this.state.asianF)
    let hispanicLatinTotal = parseInt(this.state.hispanicLatinM)+parseInt(this.state.hispanicLatinF)

    // TODO: calculate gender totals

    //copy state
    const stateCopy = {...this.state};
    // mutate stateCopy
    stateCopy.companyRace.push(whiteTotal, blackTotal, asianTotal, hispanicLatinTotal);
    stateCopy.companyGender.push() //TODO: Complete push totals
    // update component (Form) state
    this.setState(stateCopy);
    // update App state
    this.props.setSeries(this.state.companyRace);
    this.props.setPieData(this.state.companyGender);
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
        <button onClick={e => this.onSubmit(e)}><link to ='/Dashboard'></link>Submit</button>
      </form>
      // <div>          <navbar companyRace = {this.state.companyRace} />
      // </div>
    )
  }
}

export default Form;