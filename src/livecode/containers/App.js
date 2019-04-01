import React, { Component } from 'react';
import UnicornFormContainer from './UnicornFormContainer';
import UnicornsList from '../components/UnicornsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: [
        {unicornName: "Charlie the Unicorn" },
        {unicornName: "Garyl the Binicorn" }
      ]
    }
    this.trackNewUnicorn = this.trackNewUnicorn.bind(this)
  }

  trackNewUnicorn(newUnicorn){
    let newArrayofUnicorns = this.state.unicorns.concat(newUnicorn)
    this.setState({ unicorns: newArrayofUnicorns})
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Unicorn Tracker</h1>
          <UnicornFormContainer
            trackNewUnicorn={this.trackNewUnicorn}
          />
          <UnicornsList
            unicorns={this.state.unicorns}
          />
        </div>
      </div>
    );
  }
}

export default App;






















// let coffee = {
//   coffeeSize: "Medium",
//   coffeeRoast: "Light"
// }
//
// coffee["origin"] = "Guatemala"
//
// Object.assign({}, coffee, {origin: "Guatemala"})




// /
