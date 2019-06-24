import React, { Component } from 'react';

import UnicornFormContainer from './UnicornFormContainer';
import UnicornsList from '../components/UnicornsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: [
        {unicornName: "Charlie the Unicorn", hornLength: "1 foot" },
        {unicornName: "Princess Celestia", hornLength: "2 feet" }
      ]
    }
    this.trackNewUnicorn = this.trackNewUnicorn.bind(this);
  }

  trackNewUnicorn(newUnicornObject){
    let newUnicornArray = this.state.unicorns.concat(newUnicornObject)

    this.setState({ unicorns: newUnicornArray })
  }


  render() {
    // debugger
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
