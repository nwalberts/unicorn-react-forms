import React, { Component } from 'react';
import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
      unicornAge: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUnicornChange = this.handleUnicornChange.bind(this);
    this.handleUnicornAge = this.handleUnicornAge.bind(this);
  }

  handleUnicornChange(event){
    this.setState({ unicornName: event.target.value })
  }

  handleUnicornAge(event){
    this.setState({ unicornAge: event.target.value })
  }
  
  handleFormSubmit(event){
    event.preventDefault()

    let unicornPayload = {
        unicornName: this.state.unicornName,
        unicornAge: this.state.unicornAge
      }
    //
      this.props.trackNewUnicorn(unicornPayload)
  }





  render() {
    console.log(this.state)
    return (
      <div>
        <form className="callout" onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.unicornName}
            handleChange={this.handleUnicornChange}
          />
          <TextField
            content={this.state.unicornAge}
            handleChange={this.handleUnicornAge}
          />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UnicornFormContainer;
