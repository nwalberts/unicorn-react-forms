import React, { Component } from 'react';

import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
      hornLength: ""
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUnicornChange = this.handleUnicornChange.bind(this);
    this.handleHornLengthChange = this.handleHornLengthChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleFormSubmit(event){
    event.preventDefault()

    let newUnicornObject = {
      unicornName: this.state.unicornName,
      hornLength: this.state.hornLength
    }

    this.props.trackNewUnicorn(newUnicornObject)
    this.handleClearForm()
  }

  handleUnicornChange(event){
    let input = event.target.value

    this.setState({unicornName: input})
  }

  handleHornLengthChange(event){
    let input = event.target.value

    this.setState({hornLength: input})
  }

  handleClearForm(){
    this.setState({ unicornName: "" })
  }


  render() {
    // debugger
    return (
      <div>
        <form className="callout" onSubmit={this.handleFormSubmit} >

          <TextField
            content={this.state.unicornName}
            handleUnicornChange={this.handleUnicornChange}
          />
          <TextField
            content={this.state.hornLength}
            handleUnicornChange={this.handleHornLengthChange}
          />

          <input className="button" type="submit" value="Submit" />
        </form>

        <button className="button" onClick={this.handleClearForm} > Clear Form </button>
      </div>
    );
  }
}

export default UnicornFormContainer;
