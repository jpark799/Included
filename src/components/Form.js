import React, { Component } from 'react'

class Form extends Component {

  state = {
    whiteM: '',
    whiteF: '',
    blackM: '',
    blackF: '',
    asianM: '',
    asianF: '',
    latinHispanicM: '',
    latinHispanicF: ''
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
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
        <input name="latinHispanicM" placeholder= "Male" value={this.state.latinHispanicM} onChange={e => this.change(e)} />
        <input name="latinHispanicF" placeholder= "Female" value={this.state.latinHispanicF} onChange={e => this.change(e)} />
        <br/><br/>

        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}


export default Form;