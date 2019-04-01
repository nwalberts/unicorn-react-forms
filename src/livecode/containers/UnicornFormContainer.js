import React, { Component } from 'react';
import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: ''
      errors: {
        {nameError: "Item must not be blank"}
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUnicornChange = this.handleUnicornChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleUnicornChange(event) {

    this.setState({ unicornName: event.target.value })
  }

  handleClearForm(){
    this.setState({unicornName: ""})
  }

  handleFormSubmit(event){
    event.preventDefault()

    let unicornPayload = {
      unicornName: this.state.unicornName
    }

    this.props.trackNewUnicorn(unicornPayload)
  }


  render() {
    console.log(this.state)

    return (
      <div>
        <form className="callout" onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.unicornName}
            handleUnicornChange={this.handleUnicornChange}
          />
          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>

        </form>
        <button onClick={this.handleClearForm}> Clear </button>
      </div>
    );
  }
}

export default UnicornFormContainer;
