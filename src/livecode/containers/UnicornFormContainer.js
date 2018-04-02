import React, { Component } from 'react';
import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornConsumed: '',
      unicornMeals: []
    }
    this.trackConsumption = this.trackConsumption.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUnicornConsumedChange = this.handleUnicornConsumedChange.bind(this);
  }

  trackConsumption(unicorn){
    let allMeals = this.state.unicornMeals
    this.setState({ unicornMeals: allMeals.concat(unicorn) })
  }

  handleFormSubmit(event){
    event.preventDefault()

    let unicornPayload = {
      unicornConsumed: this.state.unicornConsumed
    }

    this.trackConsumption(unicornPayload)
  }

  handleUnicornConsumedChange(event) {
    // debugger;
    this.setState({ unicornConsumed: event.target.value })
  }

  render() {
    // debugger;
    console.log(this.state)

    let unicornArray = this.state.unicornMeals.map((unicorn) => {

      return(
        <li key={unicorn.unicornConsumed}>
          {unicorn.unicornConsumed}
        </li>
      )
    })

    return (
      <div>
        <form className="callout" onSubmit={this.handleFormSubmit}>
          How bad of a person are you? Do you really want to eat Unicorn?
          <TextField
            content={this.state.unicornConsumed}
            consumedHandler={this.handleUnicornConsumedChange}
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
