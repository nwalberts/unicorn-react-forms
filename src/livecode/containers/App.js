import React, { Component } from 'react';
import UnicornFormContainer from './UnicornFormContainer';
import UnicornsList from '../components/UnicornsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: [
        {unicornName: "Charlie the Unicorn", unicornAge: 455 }
      ]
    }
    this.trackNewUnicorn = this.trackNewUnicorn.bind(this);
  }

  trackNewUnicorn(unicornPayload){
      let allUnicorns = this.state.unicorns
      this.setState({ unicorns: allUnicorns.concat(unicornPayload) })
    }

  render() {
    // debugger;
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
