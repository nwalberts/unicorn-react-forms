import React, { Component } from 'react';
import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
      unicorns: []
    }
    this.trackNewUnicorn = this.trackNewUnicorn.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUnicornChange = this.handleUnicornChange.bind(this);
  }

  trackNewUnicorn(unicorn){
    let allMeals = this.state.unicornMeals
    this.setState({ unicornMeals: allMeals.concat(unicorn) })
  }

  handleFormSubmit(event){
    event.preventDefault()

    let unicornPayload = {
      unicornName: this.state.unicornName
    }

    this.props.trackNewUnicorn(unicornPayload)
  }

  handleUnicornChange(event) {
    // debugger;
    this.setState({ unicornName: event.target.value })
  }

  render() {
    // debugger;
    console.log(this.state)

    let unicornArray = this.state.unicorns.map((unicorn) => {

      return(
        <li key={unicorn.unicornName}>
          {unicorn.unicornName}
        </li>
      )
    })

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
        {unicornArray}
      </div>
    );
  }
}

export default UnicornFormContainer;
