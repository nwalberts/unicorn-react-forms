import React, { Component } from 'react';
import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUnicornChange = this.handleUnicornChange.bind(this);
  }

  handleFormSubmit(event){
    event.preventDefault()

    let unicornPayload = {
      unicornName: this.state.unicornName
    }

    this.props.trackNewUnicorn(unicornPayload)
  }

  handleUnicornChange(event) {
    this.setState({ unicornName: event.target.value })
  }

  render() {

    return (
      <div>
        <form className="callout" onSubmit={this.handleFormSubmit}>
          Track magical creatures. Specifically unicorns please...
          <TextField
            content={this.state.unicornName}
            unicornHandler={this.handleUnicornChange}
          />

          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>

        </form>
      </div>
    );
  }
}

export default UnicornFormContainer;
